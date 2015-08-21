FROM node:0.12.7-wheezy

MAINTAINER Jialu <zhangjialu@yahoo.com>

RUN npm install express -g
RUN npm install expressworks -g
RUN mkdir /usr/src/myapp

COPY hello.html /usr/src/myapp
COPY webserver.js /usr/src/myapp

WORKDIR /usr/src/myapp

EXPOSE 7777


