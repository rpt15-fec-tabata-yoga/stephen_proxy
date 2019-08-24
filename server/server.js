const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/:gameId', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));






const port = 30005;
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});