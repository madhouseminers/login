FROM node:14-alpine

EXPOSE 4000
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm run build

CMD npm start
