FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production
EXPOSE 3000
ENTRYPOINT ["node", "dist/index.js"]

