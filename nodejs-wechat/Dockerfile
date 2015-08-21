FROM node:0.12.7

MAINTAINER Jialu <zhangjialu@yahoo.com>
USER root

#RUN npm install express -g
#RUN npm install expressworks -g

RUN mkdir /myapp

ADD ./hello.html /myapp/
ADD ./webserver.js /myapp/



WORKDIR /myapp/

EXPOSE 7777



