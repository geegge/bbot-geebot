## Run dev with docker

(from https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093)

- install docker
- run `docker-compose -f docker-compose.builder.yml run --rm install`
- run `docker-compose up`

## Run in a chat platform

- choose a message adapter (install package or use included).
- setting login credentials in .env file, environment or package settings.
- e.g. start chatting live with `npm start -- -m rocketchat`
