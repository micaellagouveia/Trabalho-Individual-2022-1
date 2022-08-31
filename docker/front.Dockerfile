FROM node:18-buster

COPY library_front /library_front

WORKDIR /library_front

RUN apt update -y && apt install npm -y

RUN npm install