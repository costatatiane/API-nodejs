// imports
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

// express
const app = express();

// body parser
app.use(bodyParser.json());

app.use(routes);

// server running
const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});