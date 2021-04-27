FROM ubuntu:latest
MAINTAINER Aaron Goshine <greenlig@gmail.com>
USER root

ARG DEBIAN_FRONTEND=noninteractive

RUN mkdir -p /Home/test-folder
ENV TD /Home/test-folder
WORKDIR $TD

RUN apt-get -y update
RUN apt-get -y install git 
RUN apt-get -y install unzip
RUN apt-get -y install wget
RUN apt-get -y install nodejs
RUN apt-get -y install libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev
RUN apt-get -y install npm
RUN apt-get -y install vim
RUN apt-get -y install curl
RUN apt-get -y install chromium-browser

# We need to remember that we have to use specific version of chrome divers with chrome
# because of compatability issues
#
ARG CHROME_VERSION="81.0.4044.113-1"
ARG CHROME_DRIVER_VERSION="81.0.4044.69"

RUN wget --no-verbose -O /tmp/chrome.deb https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}_amd64.deb \
  && apt-get -y install /tmp/chrome.deb \
  && rm /tmp/chrome.deb

RUN wget https://chromedriver.storage.googleapis.com/${CHROME_DRIVER_VERSION}/chromedriver_linux64.zip &&  unzip chromedriver_linux64.zip

#ADD . $TD/

