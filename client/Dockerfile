# 1. lépés: build stage
FROM node:18 AS build
WORKDIR /app

# Csak a package fájlok másolása a gyorsabb cache miatt
COPY package*.json ./
RUN npm install

# App kód másolása
COPY . .

# React app build
RUN npm run build

# 2. lépés: serve nginx-szel
FROM nginx:alpine
# Másoljuk át a buildet az nginx html könyvtárába
COPY --from=build /app/dist /usr/share/nginx/html

# Port exposal
EXPOSE 80

# Indítási parancs
CMD ["nginx", "-g", "daemon off;"]
