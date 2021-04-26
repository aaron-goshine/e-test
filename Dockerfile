FROM ubuntu:latest
MAINTAINER Aaron Goshine <greenlig@gmail.com>
USER root

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update
RUN apt-get -y install git 
RUN apt-get -y install unzip
RUN apt-get -y install wget
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN apt-get -y install libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev
RUN apt-get -y install vim
RUN apt-get -y install curl
RUN apt-get -y install chromium-browser
# RUN apt-get -y install google-chrome-stable

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install ./google-chrome-stable_current_amd64.deb

RUN mkdir -p /Home/test-folder
ENV TD /Home/test-folder
ADD . $TD/
WORKDIR $TD
# RUN npm install
# RUN npm run e2e-test 
