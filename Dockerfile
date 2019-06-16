FROM node:latest

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --production --no-progress --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]