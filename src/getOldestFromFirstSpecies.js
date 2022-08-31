const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findId = data.employees.find((employee) => employee.id === id);
  const firstSpecieId = findId.responsibleFor[0];
  const speciesResidents = data.species.find((specie) => specie.id === firstSpecieId).residents;
  const oldestAnimal = speciesResidents.sort((a, b) => b.age - a.age)[0];
  const returnedArr = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return returnedArr;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
