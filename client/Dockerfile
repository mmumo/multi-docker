FROM node:16-alpine as builder
RUN mkdir /app && chown node:node /app
WORKDIR '/app'

USER node

COPY ./package.json ./
RUN npm install
COPY --chown=node:node . .
USER node

RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
