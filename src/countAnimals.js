const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (typeof animal !== 'object') {
    const obj = {};
    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  if (Object.keys(animal).length === 2) {
    const filterName = data.species.find((specie) => specie.name === animal.specie);
    const filterSex = filterName.residents.filter((resident) => resident.sex === animal.sex);
    return filterSex.length;
  }
  if (Object.keys(animal).length === 1) {
    const filterName = data.species.find((specie) => specie.name === animal.specie);
    return filterName.residents.length;
  }
}

module.exports = countAnimals;
