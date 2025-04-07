FROM node:18-alpine

WORKDIR /usr/src/app

COPY app.js .

RUN npm install fastify

EXPOSE 3000

CMD ["node", "app.js"]