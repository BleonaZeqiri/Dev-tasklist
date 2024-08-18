FROM node:latest

WORKDIR .

COPY ./app ./

RUN npm install

COPY ./app .

EXPOSE 5050

CMD ["node", "index.js"]
