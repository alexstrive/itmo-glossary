FROM node:18.10.0-alpine as build

COPY . /app/

WORKDIR /app

RUN npm install
RUN npm run build


FROM node:18.10.0-alpine

COPY --from=build /app/dist ./app
COPY --from=build /app/package.json ./app/package.json
COPY --from=build /app/node_modules ./app/node_modules

WORKDIR /app

EXPOSE 3000

CMD [ "node", "index.js" ]

