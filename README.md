# Homepage

Personal portfolio site built with React, Vite, Tailwind CSS, and Bun.

## Local development

Install [Bun](https://bun.sh/), then run:

```bash
git clone git@github.com:tychart/homepage.git
cd homepage/
bun install
bun run dev
```

After that, open the local URL printed by Vite.

## Deployment

Deployment is image-based: GitHub Actions builds the container and publishes it to GitHub Container Registry. Production pulls the published image, so the server does **not** need to clone this repo or build anything locally.

Published image:

```text
ghcr.io/tychart/homepage:latest
```

Production compose:

```yaml
services:
  homepage:
    image: ghcr.io/tychart/homepage:latest
    container_name: homepage
    ports:
      - "8080:8080"
    restart: unless-stopped
```

To update production, pull the latest image and recreate the container:

```bash
docker compose pull
docker compose up -d
```

With Podman:

```bash
podman-compose pull
podman-compose up -d
```
