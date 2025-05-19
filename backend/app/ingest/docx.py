def extract_text(file_path: str) -> str:
    """Extract text from a DOCX file."""
    # Placeholder: use python-docx in a full implementation
    with open(file_path, "rb") as f:
        data = f.read()
    return data.decode(errors="ignore")
