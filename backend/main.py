from fastapi import FastAPI

app = FastAPI(title="AI PR Review Assistant")


@app.get("/health")
def health_check():
    return {"status": "ok"}