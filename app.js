const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const date = new Date();
    const formattedDate = date.toLocaleString(); // Corrected here
    res.send(`<h1>La date et l'heure actuelles sont: ${formattedDate}</h1>`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
