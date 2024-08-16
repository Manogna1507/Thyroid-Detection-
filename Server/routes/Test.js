const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const thyroidResultsRoute = require('./routes/thyroidResultsRoute');

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB Atlas
mongoose.connect('your_mongodb_atlas_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/thyroid', thyroidResultsRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
