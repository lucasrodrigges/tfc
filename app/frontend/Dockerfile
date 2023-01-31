FROM node:16.14-alpine

EXPOSE 3000

WORKDIR /app-frontend

COPY . /app-frontend/

RUN npm i

ENTRYPOINT [ "npm", "start" ]