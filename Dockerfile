FROM nginx:1.21.3-alpine
COPY ./default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/html

COPY ./app app

COPY index.html .
COPY robots.txt .
COPY humans.txt .
