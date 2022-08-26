const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  data.species.every((specie) => data.species.name === animal);
}

console.log(data.species);

module.exports = getAnimalsOlderThan;
