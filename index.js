const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello World from Node.js App!');
});

let server = null;

if (require.main === module) {
    server = app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = { app, server };
