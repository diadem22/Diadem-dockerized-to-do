FROM node:18-alpine

ENV MONGO_DB_USERNAME=Ifeoluwa \
    MONGO_DB_PWD=password

RUN mkdir -p /Docker-to-do/app

COPY ./app /Docker-to-do/app

# set default dir so that next commands executes in /home/app dir
WORKDIR /Docker-to-do/app

# will execute npm install in /home/app because of WORKDIR
RUN npm install

# no need for /home/app/server.js because of WORKDIR
CMD ["node", "app.js"]

