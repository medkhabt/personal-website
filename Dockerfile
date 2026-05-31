FROM node:25-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --loglevel=verbose

COPY . .
run npm run build 

FROM nginx:alpine
COPY --from=build /app/pages/ /usr/share/nginx/html
EXPOSE 80
