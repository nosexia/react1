const $ = require('jquery');
const axios = require('axios');

axios.interceptors.response.use((response) => {
  return response.data
}, function(error) {
  throw new Error(error);
})


$.ajax = function(config) {
  return toAxiosAdaptor(config);
}

function toAxiosAdaptor(config) {
  return axios({
    url: config.url,
    method: config.method
  }).then(config.success, config.error);
}


$.ajax({
  url: 'xxx',
  method: 'get',
  success() {

  },
  error() {

  }
});