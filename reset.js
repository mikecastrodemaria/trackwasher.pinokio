{
  "run": [
    {
      "method": "fs.rm",
      "params": {
        "path": "env"
      }
    },
    {
      "method": "fs.rm",
      "params": {
        "path": "app"
      }
    },
    {
      "method": "notify",
      "params": {
        "html": "TrackWasher reset complete. Click <b>Install</b> to reinstall from scratch."
      }
    }
  ]
}
