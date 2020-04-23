// imports
const express = require('express');
const routes = require('./routes');

// express
const app = express();

app.use(routes);

// server running
const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});