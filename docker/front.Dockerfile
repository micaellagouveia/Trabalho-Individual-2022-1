FROM node:18-buster

COPY library_front /library_front

WORKDIR /library_front

RUN yarn install

CMD ["yarn", "start"]
