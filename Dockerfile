FROM node:8.4.0
MAINTAINER Michimune Kohno <mikono@microsoft.com>

ENV SSH_PASSWD "root:Docker!"
RUN apt-get update \
    && apt-get install -y --no-install-recommends dialog \
    && apt-get update \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "$SSH_PASSWD" | chpasswd 

COPY sshd_config /etc/ssh
#COPY . /app
COPY .angular-cli.json index.js karma.conf.js protractor.conf.js package.json package-lock.json tsconfig.json tslint.json /app/
COPY e2e /app/e2e
COPY src /app/src

WORKDIR /app

RUN apt update \
   && npm install \
   && ./node_modules/.bin/ng build --prod

RUN echo service ssh start > init.sh
RUN echo node --inspect=0.0.0.0:${APPSVC_TUNNEL_PORT:-30000} ./node_modules/.bin/http-server ./dist >> init.sh

ENV WEBSITES_PORT 2222 8080
ENTRYPOINT [ "/bin/bash", "./init.sh" ]
