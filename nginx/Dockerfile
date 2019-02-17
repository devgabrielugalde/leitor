FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
ARG SAP_ENV
COPY $SAP_ENV/default.conf /etc/nginx/conf.d/default.conf
COPY bemolcombr.key /etc/nginx/
COPY server.pem /etc/nginx/