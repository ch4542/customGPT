import os

class VectorStore:
    """Simple interface wrapping different vector store implementations."""

    def __init__(self):
        self.store_type = os.environ.get("VECTORSTORE", "chroma")
        # Real implementation would initialize connection to Chroma or Supabase

    def add_documents(self, documents):
        """Add a list of documents to the store."""
        # Placeholder implementation
        print(f"Adding {len(documents)} documents to {self.store_type} store")

    def similarity_search(self, query: str, k: int = 5):
        """Return k most similar documents to the query."""
        # Placeholder implementation
        print(f"Searching for '{query}' in {self.store_type} store")
        return []
