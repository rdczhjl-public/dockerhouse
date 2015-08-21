FROM node:0.12.7-wheezy

MAINTAINER Jialu <zhangjialu@yahoo.com>

RUN mkdir /usr/myapp


COPY hello.html /usr/myapp
COPY webserver.js /usr/myapp

#RUN npm install express -g
#RUN npm install expressworks -g
WORKDIR /usr/myapp

EXPOSE 7777


