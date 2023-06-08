FROM node:19-alpine3.16

RUN apk add curl
RUN npm update -g npm

ENV src .
COPY ${src}/package.json /tmp/package.json
RUN cd /tmp && npm install
WORKDIR /app
COPY ${src} /app
RUN cp -a /tmp/node_modules /app

EXPOSE 15000
CMD ["npm", "start"]