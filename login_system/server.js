const express = require('express');
const connectDB = require('./db/db');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Define Routes
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/posts', require('./Routes/post'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
