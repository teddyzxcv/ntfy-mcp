FROM node:23

WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY build ./build
COPY src ./src

CMD ["node", "build/index.js"]
