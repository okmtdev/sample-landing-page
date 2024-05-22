provider "aws" {
  region = "ap-northeast-1"
}

resource "aws_s3_bucket" "static_site_bucket" {
  bucket = "okmtdev-landing-page-sample"
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
  acl      = "public-read"
}

output "website_url" {
  value = aws_s3_bucket.static_site_bucket.website_endpoint
}
