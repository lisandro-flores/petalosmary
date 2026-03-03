# ── Stage 1: build ──────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Build arg so Astro knows the PB URL at build time (SSR = runtime, so this is only for type checks)
ARG PB_URL=http://pocketbase:8090
ENV PB_URL=$PB_URL

RUN npm run build

# ── Stage 2: runtime ────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
