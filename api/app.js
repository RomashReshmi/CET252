const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chickenRoutes = require('./routes/chickenRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // In case APIDOC is served or similar

// Routes
app.use('/chickens', chickenRoutes);

// Error Handling
app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});
