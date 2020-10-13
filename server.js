const express = require('express');
const pool = require('./db');
const route = require('./route');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.json());


route(app);

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});