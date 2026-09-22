# syntax=docker/dockerfile:1

# Build the Vite app with Bun. Keep dependency install in its own layer so
# Docker and Podman can reuse it when only application code changes.
FROM docker.io/oven/bun:1-alpine AS build

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY index.html tsconfig.json vite.config.js eslint.config.js ./
COPY public ./public
COPY src ./src

RUN bun run build

# Serve the static build with an unprivileged Nginx runtime image.
FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=101:101 /app/dist /usr/share/nginx/html

EXPOSE 8080
