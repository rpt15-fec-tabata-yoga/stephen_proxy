const axios = require('axios');

const getData = () => {
  axios.get('/api/overview/' + window.location.pathname.split('/')[1])
    .then((res) => {
      // handle data
      console.log('got to .then in axios')
    })
    .catch((err) => {
      console.log('error in get request in client', err);
    })
};

getData();