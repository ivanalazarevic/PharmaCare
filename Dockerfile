FROM node:20-alpine AS build

WORKDIR /app

ARG BUILD_MODE=production

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build --mode=${BUILD_MODE}

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/ngnx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
