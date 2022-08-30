const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const obj1 = {};
  data.species.forEach((specie) => {
    obj1[specie.name] = specie.residents.length;
  });
  return obj1;
}

console.log(countAnimals());

// const returnedObj = {};
// const animalName = data.species.name;
// const resident = data.species.residents;
// const filter1 = data.species.forEach(specie) => {
//   specie.name
// }
// return filterName;
// const filterName = data.species.map((specie) => `${specie.name}: ${specie.residents.length} `);
// return Object.assign(returnedObj, filterName);
// USE SORT
// data.species.reduce((obj, specie) => {
//   const returnedObj = obj;
//   returnedObj[specie.name] = specie.residents.length;
//   return returnedObj;
// }, {});

module.exports = countAnimals;
