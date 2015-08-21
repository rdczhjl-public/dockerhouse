FROM node:0.12.7-wheezy

MAINTAINER Jialu <zhangjialu@yahoo.com>

RUN mkdir /usr/src/myapp

COPY hello.html /usr/src/myapp
COPY webserver.js /usr/src/myapp

#RUN npm install express -g
#RUN npm install expressworks -g
WORKDIR /usr/src/myapp

EXPOSE 7777


