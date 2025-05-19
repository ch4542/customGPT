import os
from celery import Celery

celery_app = Celery(__name__)
celery_app.conf.broker_url = os.environ.get("BROKER_URL", "redis://localhost:6379/0")

@celery_app.task
def ingest_data():
    """Ingest raw data from configured sources."""
    # Placeholder implementation
    print("Ingesting data")

@celery_app.task
def preprocess_data():
    """Preprocess ingested data."""
    print("Preprocessing data")

@celery_app.task
def train_model():
    """Launch model training."""
    print("Training model")
