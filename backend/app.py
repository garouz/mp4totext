from fastapi import FastAPI
from pydantic import BaseModel
import openai

app = FastAPI()

# Set up OpenAI API key
openai.api_key = "YOUR_OPENAI_API_KEY"

class TranscriptionRequest(BaseModel):
    file_path: str

@app.post("/transcribe")
def transcribe(request: TranscriptionRequest):
    response = openai.Audio.transcribe(
        model="whisper-1",
        file=request.file_path
    )
    return response['text']