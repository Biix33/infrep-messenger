FROM node:10.15.1

WORKDIR /server

COPY package*.json /server/

RUN npm install

COPY . /server/

EXPOSE 80

CMD ["npm", "start"]