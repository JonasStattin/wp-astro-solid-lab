FROM node:alpine

RUN apk add --no-cache curl

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm install
