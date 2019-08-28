const express = require('express');
const bodyParser = require('body-parser');
const port = 3006;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/proxy/overview', (req, res) => {
//   request('http://localhost:3000/dist/bundle.js', (request, response, body) => {
//     res.send(body);
//   });
// })

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});