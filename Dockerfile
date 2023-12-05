FROM node:18.14.2-alpine

WORKDIR /glossary

COPY ./package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]