FROM node:0.12.7

MAINTAINER Jialu <zhangjialu@yahoo.com>
USER root

RUN npm install express -g &&  npm install expressworks -g && npm install xml

RUN mkdir /myapp

ADD ./*.html /myapp/
ADD ./*.js /myapp/

WORKDIR /myapp/

EXPOSE 7777



