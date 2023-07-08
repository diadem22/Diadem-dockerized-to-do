FROM node:18-alpine

ENV MONGO_DB_USERNAME=Ifeoluwa \
    MONGO_DB_PWD=password

RUN mkdir -p /Docker-to-do/app

COPY ./app /Docker-to-do/app


WORKDIR /Docker-to-do/app

RUN npm install

CMD ["node", "app.js"]

