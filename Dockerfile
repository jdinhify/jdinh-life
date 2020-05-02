FROM node:12-alpine

ENV CI=true

RUN apk add bash

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci
