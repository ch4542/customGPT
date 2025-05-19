def extract_text(file_path: str) -> str:
    """Extract text from a CSV file."""
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()
