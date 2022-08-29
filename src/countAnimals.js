const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const filterName = data.species.map((specie) => `${specie.name}: ${specie.residents.length} `);
  return filterName;
  // USE SORT
}
console.log(countAnimals());
module.exports = countAnimals;
