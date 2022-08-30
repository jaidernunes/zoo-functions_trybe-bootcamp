const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (typeof animal !== 'object') {
    const obj1 = {};
    data.species.forEach((specie) => {
      obj1[specie.name] = specie.residents.length;
    });
    return obj1;
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

console.log(countAnimals({ specie: 'bears', sex: 'female' }));
console.log(Object.keys({ specie: 'bears', sex: 'female' }).length);
// const obj1 = {};
// data.species.forEach((specie) => {
//   obj1[specie.name] = specie.residents.length;
// });
// return obj1;
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
