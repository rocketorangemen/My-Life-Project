// Creating server
const path = require("path");

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// Have Node serve the files for our build React app
app.use(express.static(path.resolve(__dirname, '../client')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to the database my friend" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

