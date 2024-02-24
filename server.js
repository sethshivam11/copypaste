const express = require('express');
const app = express();
const port = 80;
const path = require('path');
const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "frontend", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname1, "frontend", "build", "index.html"));
});

app.listen(port, console.log(`App is listening on port`, port));