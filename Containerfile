FROM busybox:1.37

# Create a non-root user to own the files and run our server
RUN adduser -D static
USER static
WORKDIR /home/static

COPY index.html .
COPY ./css ./css
COPY ./js ./js

CMD ["busybox", "httpd", "-f", "-v", "-p", "2336"]
