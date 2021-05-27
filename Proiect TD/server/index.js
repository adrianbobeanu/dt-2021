var api = require('./src/api.js').app;
const fs = require('fs');
const contrgoggsFilepath = './src/contrgoggs.json';

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/contrgoggs', function (request, response) {
  response.json(getContrgoggs());
});

api.get('/contrgoggs/:id', function (request, response) {
  let contrgogg = getContrgoggById(request.params.id);
  if (contrgogg) response.json(contrgogg);
  response.json('not found');
});

api.put('/contrgoggs', function (request, response) {
  saveContrgogg(request.body);
  response.json('User was saved succesfully');
});

api.post('/contrgoggs', function (request, response) {

  let contrgogg = request.body;
  let contrgoggs = getContrgoggs();

  for(let i=0; i < contrgoggs.length; i++) {
    if (contrgoggs[i].id === contrgogg.id) {
      contrgoggs[i] = contrgogg;
    }
  }

  try {
    fs.writeFileSync(contrgoggsFilepath, JSON.stringify(contrgoggs));
  } catch (err) {
    console.error(err)
  }

  response.json('Controller or goggles were updated succesfully');
});

api.delete('/contrgoggs/:index', function (request, response) {

  response.json('User with index ' + request.params.index + ' was deleted');
});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});

function getContrgoggs() {
  let contrgoggs = [];
  try {
    contrgoggs = JSON.parse(fs.readFileSync(contrgoggsFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  return contrgoggs;
}

function saveContrgogg(contrgogg) {
  let contrgoggs = getContrgoggs();
  let maxId = getMaxId(contrgoggs);
  contrgogg.id = maxId+1;
  contrgoggs.push(contrgogg);
  try {
    fs.writeFileSync(contrgoggsFilepath, JSON.stringify(contrgoggs));
  } catch (err) {
    console.error(err)
  }
}

function getMaxId(contrgoggs) {
  let max = 0;
  for (var i=0; i<contrgoggs.length;i++) {
    if(max < contrgoggs[i].id) {
      max = contrgoggs[i].id;
    }
  }
  return max;
}

function getContrgoggById(id){
  let contrgoggs = getContrgoggs();//
  let selectedContrgogg = null;
  for(var i=0; i<contrgoggs.length; i++) {
    if(id == contrgoggs[i].id) selectedContrgogg = contrgoggs[i];
  }
  return selectedContrgogg;
}
