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

Deployment is image-based: GitHub Actions builds the container and publishes it to GitHub Container Registry, then production pulls the latest published image. The production server does **not** need to clone this repo or build anything locally.

Published image:

```text
ghcr.io/tychart/homepage:latest
```

### One-time GitHub/GHCR setup

1. In GitHub, go to **Settings → Actions → General → Workflow permissions**.
2. Select **Read and write permissions** so the workflow can publish packages with `GITHUB_TOKEN`.
3. Push to `main` and let the **Build and publish container** workflow run once.
4. Open the created package on GitHub: **Profile → Packages → homepage**.
5. Set the package visibility to **Public**.

Public is the simplest option for this site: the image contains only the already-public static portfolio build, and your homelab server can pull it without storing a GitHub token.

### Production compose

Use the checked-in `compose.yml` in Dockge or on the server:

```yaml
services:
  homepage:
    image: ghcr.io/tychart/homepage:latest
    container_name: homepage
    ports:
      - "8080:8080"
    restart: unless-stopped
```

### Updating production

In Dockge, pull the latest image and redeploy/recreate the stack.

Equivalent Docker Compose commands:

```bash
docker compose pull
docker compose up -d
```

Equivalent Podman Compose commands:

```bash
podman-compose pull
podman-compose up -d
```

### Tags

- `latest` tracks the newest successful build from `main` and is what production should use.
- `sha-...` tags are also published for precise rollback/debugging.
- Git tags like `v1.0.0` publish matching versioned image tags if you ever want release-style deploys.
