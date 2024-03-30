FROM nginx

USER root

COPY webserver/entrypoint.sh /entrypoint.sh
COPY webserver/nginx/nginx.conf /etc/nginx/nginx.conf
COPY /dist/apps/webapplication-demo /usr/share/nginx/html

RUN chmod 777 /etc/nginx/ -R
RUN chmod a+x /entrypoint.sh

EXPOSE 8080

ENTRYPOINT [ "/entrypoint.sh" ]
