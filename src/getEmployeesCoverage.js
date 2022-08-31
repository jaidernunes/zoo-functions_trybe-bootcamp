// const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const returnedObj = {
  id: 'id',
  fullName: 'name last',
  species: [],
  locations: [],
};

// const findSpecie = findEmployee.responsibleFor.map((specie) => data.species.id)
// const findSpecie = data.species.filter((value) => ids.includes(value.id))

function getEmployeesCoverage(employeeRef) {
  // seu código aqui
  const findEmployee = employees.find((employee) => (employee.id === employeeRef.id
    || employee.firstName === employeeRef.name
    || employee.lastName === employeeRef.name));
  const findSpecie = species.filter((specie) => findEmployee.responsibleFor.includes(specie.id));
  const speciesNames = findSpecie.map((specie) => specie.name);
  const speciesLocation = findSpecie.map((specie) => specie.location);

  returnedObj.id = findEmployee.id;
  returnedObj.fullName = `${findEmployee.firstName} ${findEmployee.lastName}`;
  returnedObj.species = speciesNames;
  returnedObj.locations = speciesLocation;
  return returnedObj;
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

// const expected = {
//   id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//   fullName: 'Sharonda Spry',
//   species: [ 'otters', 'frogs' ],
//   locations: [ 'SE', 'SW' ],
// };

module.exports = getEmployeesCoverage;
