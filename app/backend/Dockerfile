FROM node:16.14-alpine

EXPOSE 3001

WORKDIR /app-backend

COPY . /app-backend

RUN npm i

ENTRYPOINT [ "npm", "run", "dev" ]