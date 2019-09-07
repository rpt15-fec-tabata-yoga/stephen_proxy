const express = require('express');
const bodyParser = require('body-parser');
const port = 3006;

const app = express();

app.use('/:gameId', express.static('public'));
app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});