function users() {
  get = function () {
    return axios.get('http://localhost:3000/contrgoggs');
  };

  remove = function (index) {
    return axios.delete('http://localhost:3000/contrgoggs/'+index);
  };

  return {
    get: get,
    remove: remove
  };
}
