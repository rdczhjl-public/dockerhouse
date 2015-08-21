FROM node:0.12.7-wheezy

MAINTAINER Jialu <zhangjialu@yahoo.com>
USER root

RUN npm install express -g
RUN mkdir /myapp

ADD ./hello.html /myapp
ADD ./webserver.js /myapp


#RUN npm install expressworks -g
WORKDIR /myapp

EXPOSE 7777


