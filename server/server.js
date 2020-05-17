const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const apiRouter = require('./routes/apiRouter');
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
