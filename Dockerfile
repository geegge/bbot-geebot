FROM node:10.15.3-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache git

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install

COPY . .

CMD npm run chat