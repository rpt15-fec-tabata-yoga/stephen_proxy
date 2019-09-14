const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const axios = require('axios');
const port = 3006;

const app = express();

app.use('/', express.static('public'));
app.use('/:gameId', express.static('public'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// write code to handle getting data
let overview = 'http://ec2-54-183-97-229.us-west-1.compute.amazonaws.com';
let reviews = 'http://localhost:3001';
let image = 'http://localhost:3002';
let aboutGame = 'http://my-env.wf8cymc59m.us-west-1.elasticbeanstalk.com';
let topReviews = 'http:localhost:3004';

app.use('/api/:service/bundle.js', (req, res) => {
  let service = req.params.service;
  console.log(`request for ${service}`);
  if (service === 'overview') {
    axios.get(`${overview}/1/dist/bundle.js`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  } else if (service === 'reviews') {
    axios.get(`${overview}/Stardew%20Valley/dist/bundle.js`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  } else if (service === 'image') {
    axios.get(`${overview}/1/stardew_valley/dist/bundle.js`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  } else if (service === 'aboutGame') {
    axios.get(`${aboutGame}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  } else if (service === 'topReviews') {
    axios.get(`${overview}/1/bundle.js`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  }
})


app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});