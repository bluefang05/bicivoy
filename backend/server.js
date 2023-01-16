const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const config = require('./config/db');
const routes = require('./routes');
const auth = require('./middlewares/auth');
const validate = require('./middlewares/validate');

// Connect to database
const pool = new pg.Pool(config.db);

// Set up express app
const app = express();

// Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up authentication and authorization
app.use(auth);

// Use routes
app.use('/', routes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

