FROM node:14.15.5-alpine3.10 as builder

WORKDIR /app

COPY . .

RUN apk add chromium

# ENV NODE_OPTIONS=--max_old_space_size=4096
ENV NODE_OPTIONS=--max_old_space_size=2048
RUN yarn --cwd packages/core install && yarn --cwd playground install

RUN yarn --cwd playground serve

FROM nginx:alpine

COPY --from=builder /app/playground/www /usr/share/nginx/html
COPY --from=builder /app/nginx /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]