FROM node:20

#set working directory inside the container

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD ["node","index.js"]