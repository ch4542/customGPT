import os
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

from .chat import generate_chat_response
from .tasks import ingest_data, preprocess_data, train_model

app = FastAPI()

@app.post("/ingest")
async def ingest_endpoint():
    ingest_data.delay()
    return {"status": "ingest started"}

@app.post("/preprocess")
async def preprocess_endpoint():
    preprocess_data.delay()
    return {"status": "preprocess started"}

@app.post("/train")
async def train_endpoint():
    train_model.delay()
    return {"status": "training started"}

@app.websocket("/ws/chat")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            response = generate_chat_response(data)
            await websocket.send_text(response)
    except WebSocketDisconnect:
        pass
