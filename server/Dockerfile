# Stage 1: Build frontend
FROM node:20-alpine AS builder

WORKDIR /build

COPY package*.json build.js ./
COPY index.html ./
COPY css/ ./css/
COPY js/ ./js/
COPY i18n/ ./i18n/
COPY assets/ ./assets/

RUN npm ci && node build.js

# Stage 2: Production server
FROM node:20-alpine

WORKDIR /app

COPY server/package*.json ./
RUN npm ci --only=production

COPY server/ ./server/
COPY --from=builder /build/dist/ ./dist/

EXPOSE 3000
CMD ["node", "server/index.js"]
