#FROM node:0.12.7-wheezy
FROM ubuntu

MAINTAINER Jialu <zhangjialu@yahoo.com>

RUN mkdir /myapp


COPY hello.html /myapp
COPY webserver.js /myapp

#RUN npm install express -g
#RUN npm install expressworks -g
WORKDIR /myapp

EXPOSE 7777


