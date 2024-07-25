requestAnimationFrame('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const twilioRouter = require('./src/routes/twilio-sms');
const app = express();

const { PORT } = process.env;
const port =8080 || PORT;
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use('/twilio-sms', twilioRouter);

app.get('/', () => {
    console.log("App Demo");
})
app.listen(port, () => {
    console.log(`Server started listen to the port ${port}`);
})