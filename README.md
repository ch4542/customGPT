# Custom GPT

## Project Overview
Custom GPT is a platform that allows you to upload your data, fine‑tune GPT models on that data, and chat with the resulting custom AI assistant. The goal is to make it easy for anyone to create a specialized conversational model tailored to their own documents.

## Setup Instructions

### Requirements
- Docker for running the application in containers
- `docker-compose` (if a compose file is provided)
- An OpenAI API key for fine‑tuning and chat operations

### Environment Variables
Create a `.env` file in the project root and provide the following variables:

```
OPENAI_API_KEY=<your api key>
OTHER_ENV_VAR=...
```

The actual variables may depend on your deployment scenario. Ensure they are set before starting the containers.

## Usage
1. Start the services with Docker (for example: `docker compose up -d`).
2. Provide your OpenAI API key when prompted or via the `.env` file.
3. Upload your dataset through the frontend interface.
4. The backend processes the data and fine‑tunes a GPT model.
5. Once training is complete, you can chat with your custom model in the UI.

## Architecture
The project consists of three main components:

- **Backend**: Handles API requests, data processing, and communication with OpenAI for fine‑tuning.
- **Worker**: Performs background tasks such as training runs and heavy data operations.
- **Frontend**: A web interface for uploading data and chatting with the fine‑tuned model.

These components may run in separate containers for scalability.

## Contributing
Contributions are welcome! Please open issues or pull requests with improvements or bug fixes.

## License
This project is released under the MIT License. See the `LICENSE` file for details.

