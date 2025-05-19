import os
from .vectorstore import VectorStore

vector_store = VectorStore()

MODEL_NAME = os.environ.get("MODEL_NAME", "default-model")

def generate_chat_response(user_message: str) -> str:
    """Generate a chat response using RAG or a fine-tuned model."""
    # Placeholder RAG logic
    docs = vector_store.similarity_search(user_message)
    # In a real implementation, combine docs with model inference
    return f"Model({MODEL_NAME}) response to: {user_message}"
