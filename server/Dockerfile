FROM node:20-alpine

WORKDIR /app

# Copy and install server dependencies
COPY server/package*.json ./
RUN npm ci --only=production

# Copy server code into /app/server/
COPY server/ ./server/

# Copy built frontend
COPY dist/ ./dist/

EXPOSE 3000

CMD ["node", "server/index.js"]
