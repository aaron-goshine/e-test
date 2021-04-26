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
#
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && apt-get -y install ./google-chrome-stable_current_amd64.deb

ARG CHROME_VERSION="81.0.4044.113-1"
RUN wget --no-verbose -O /tmp/chrome.deb https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}_amd64.deb \
  && apt install -y /tmp/chrome.deb \
  && rm /tmp/chrome.deb

RUN wget https://chromedriver.storage.googleapis.com/81.0.4044.69/chromedriver_linux64.zip &&  unzip chromedriver_linux64.zip

RUN mkdir -p /Home/test-folder
ENV TD /Home/test-folder
ADD . $TD/
WORKDIR $TD
 

