def extract_text(file_path: str) -> str:
    """Extract text from a PDF file."""
    # Placeholder: a real implementation would use pdfplumber or PyPDF2
    with open(file_path, "rb") as f:
        data = f.read()
    return data.decode(errors="ignore")
