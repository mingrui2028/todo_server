require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { todoRouter } = require('./routes/todo.js'); // Update import statement

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', todoRouter); // Use todoRouter as middleware

const port = process.env.PORT;

app.listen(port);