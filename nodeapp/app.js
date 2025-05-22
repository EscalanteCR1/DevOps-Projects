const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Service is up and running using docker and terraform!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});