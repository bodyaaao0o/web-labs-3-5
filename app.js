const express = require('express');
const chainsawRouter = require('./routes/chainsawRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello World'
    });
});

app.use('/api/v1/', chainsawRouter);

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Route not found'
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
