FROM node as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i 
COPY . .

EXPOSE 3007
CMD [ "npm", "run", "start:dev" ]
