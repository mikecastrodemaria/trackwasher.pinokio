{
  "daemon": true,
  "run": [
    {
      "method": "shell.run",
      "params": {
        "venv": "env",
        "path": "app",
        "message": "streamlit run trackwasher.py --server.headless true --server.port 8501",
        "on": [
          {
            "event": "/You can now view your Streamlit app/",
            "done": true
          }
        ]
      }
    },
    {
      "method": "local.set",
      "params": {
        "url": "http://localhost:8501"
      }
    }
  ]
}
