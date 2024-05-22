provider "aws" {
  region = "ap-northeast-1"
}

resource "aws_s3_bucket" "static_site_bucket" {
  bucket = "okmtdev-landing-page-sample"
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    sid       = "PublicReadGetObject"
    effect    = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::${aws_s3_bucket.static_site_bucket.bucket}/*"]

    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.static_site_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.static_site_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_object" "object" {
  for_each = fileset("out", "**/*")
  bucket   = aws_s3_bucket.static_site_bucket.bucket
  key      = each.value
  source   = "out/${each.value}"
  etag     = filemd5("out/${each.value}")
  content_type = lookup({
    html = "text/html"
    css  = "text/css"
    js   = "application/javascript"
    png  = "image/png"
    jpg  = "image/jpeg"
    jpeg = "image/jpeg"
    gif  = "image/gif"
    svg  = "image/svg+xml"
  }, lower(element(split(".", each.value), length(split(".", each.value)) - 1)), "binary/octet-stream")
}
