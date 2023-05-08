FROM node:10-alpine
WORKDIR /home/TODO_List

COPY ./package*.json ./home/TODO_List/

RUN npm install

COPY . /home/TODO_List/

EXPOSE 5000


CMD ["node", "app.js"]