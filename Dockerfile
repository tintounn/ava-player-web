#BUILD ENV
FROM node:carbon-alpine AS builder

WORKDIR /home/app
ENV PATH /home/app/ava-player-web/node_modules/.bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
    git clone https://github.com/tintounn/ava-player-web && \
    cd ava-player-web && \
    ls -l && \
    npm install && \
    npm run build

#PRODUCTION ENV
FROM abiosoft/caddy:latest
COPY --from=builder /home/app/ava-player-web/build /srv