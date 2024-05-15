# 使用するNginxのイメージを指定
FROM nginx:alpine

# Nginxのデフォルト設定を削除
RUN rm /etc/nginx/conf.d/default.conf

# ホストマシンのビルドディレクトリをコンテナのNginxディレクトリにコピー
COPY out /usr/share/nginx/html

# Nginxの設定ファイルをコンテナにコピー
COPY nginx.conf /etc/nginx/conf.d

# 80ポートを開放
EXPOSE 80

# Nginxをフォアグラウンドで実行
CMD ["nginx", "-g", "daemon off;"]