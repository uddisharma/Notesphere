FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN  npm install

COPY . .

EXPOSE 3000

CMD ["npx", "convex","dev"]

CMD ["npm", "run", "dev"]