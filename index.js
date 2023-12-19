const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.post('/command', (req, res) => {
    const command = req.body.command;
    // You can process the command here and generate a response
    const response = `Command executed: ${command}`;
    res.json({ response });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
