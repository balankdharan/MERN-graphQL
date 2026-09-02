FROM node:20-alpine

WORKDIR /app

COPY client/package*.json ./
RUN npm install

COPY client ./

EXPOSE 3000

ENV WDS_SOCKET_PORT=0

CMD ["npm", "start"]
