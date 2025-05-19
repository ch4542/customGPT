# customGPT

This project uses Docker Compose to manage the development environment for
three components:

1. **backend** – FastAPI server.
2. **worker** – Celery worker container.
3. **frontend** – React/Tailwind client.

## Local Development

1. Install Docker and Docker Compose.
2. Create a `.env` file in the project root with your credentials and API keys. At a minimum set values for:
   - `API_KEY`
   - `DATABASE_URL`
   - `CELERY_BROKER_URL`
3. Run the services:

```bash
docker-compose up --build
```

This command builds the images if needed and starts the backend, Celery worker
and frontend containers with hot reloading enabled.
