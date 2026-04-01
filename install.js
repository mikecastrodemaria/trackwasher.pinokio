{
  "run": [
    {
      "method": "shell.run",
      "params": {
        "message": "git clone https://github.com/mikecastrodemaria/TrackAICleaner.git app"
      }
    },
    {
      "method": "shell.run",
      "params": {
        "venv": "env",
        "venv_python": "3.11",
        "path": "app",
        "message": "pip install -r requirements.txt"
      }
    },
    {
      "method": "notify",
      "params": {
        "html": "TrackWasher installed successfully! Click <b>Start</b> to launch."
      }
    }
  ]
}
