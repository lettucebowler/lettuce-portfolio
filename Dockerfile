FROM node:18

WORKDIR /app
COPY package.json pnpm-lock.yaml ./


RUN npm install -g pnpm
RUN pnpm install


COPY . .

RUN npm run build

FROM nginx:latest

WORKDIR /app
COPY --from=0 /app .
COPY ./build /usr/share/nginx/html

# EXPOSE 3000
# CMD ["node", "./build"]