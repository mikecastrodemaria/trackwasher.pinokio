{
  "run": [
    {
      "method": "shell.run",
      "params": {
        "path": "app",
        "message": "git pull"
      }
    },
    {
      "method": "shell.run",
      "params": {
        "venv": "env",
        "path": "app",
        "message": "pip install -r requirements.txt"
      }
    },
    {
      "method": "notify",
      "params": {
        "html": "TrackWasher updated to the latest version!"
      }
    }
  ]
}
