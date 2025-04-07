FROM node:18-alpine as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm install 

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-stage /usr/src/app/dist/index.html /usr/share/nginx/html/index.html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]







