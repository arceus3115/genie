from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import spacy

# Load spaCy NLP model
nlp = spacy.load("en_core_web_sm")

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development; adjust for production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.post("/process-prompt/")
async def process_prompt(request: Request):
    data = await request.json()
    user_prompt = data.get("prompt")
    
    # Use NLP to process the prompt
    doc = nlp(user_prompt)
    keywords = [token.lemma_ for token in doc if not token.is_stop]

    return {"keywords": keywords}
