/* eslint-disable max-lines-per-function */
// const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

// const returnedObj = {
//   id: 'id',
//   fullName: 'name last',
//   species: [],
//   locations: [],
// };

// const allObject = {
//   id: employee.id,
//   fullName: `${employee.firstName} ${employee.lastName}`,
//   species: species.filter((specie) => employee.responsibleFor.includes(specie.id)).map((specie) => specie.name),
//   locations: species.filter((specie) => employee.responsibleFor.includes(specie.id)).map((specie) => specie.location),
// };

function getEmployeesCoverage(employeeRef) {
  // seu código aqui

  return employees.map((emp) => ({
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: species.filter((spc) => emp.responsibleFor.includes(spc.id)).map((sp) => sp.name),
    locations: species.filter((sp) => emp.responsibleFor.includes(sp.id)).map((sp) => sp.location),
  }));
}

console.log(getEmployeesCoverage());
// '4b40a139-d4dc-4f09-822d-ec25e819a5ad'
module.exports = getEmployeesCoverage;

// 3 reqs ok !!!!!!! \/

// ALL RETURN - VALORES RETORNAM SEMPRE DO PRIMEIRO FOREACH
// const allEmployees = () => employees.map((employee) => {
//   const findSpecie = species.filter((specie) => employee.responsibleFor.includes(specie.id));
//   const speciesNames = findSpecie.map((specie) => specie.name);
//   const speciesLocation = findSpecie.map((specie) => specie.location);
//   ({
//   id: employee.id,
//   fullName:`${employee.firstName} ${employee.lastName}`,
//   species:speciesNames,
//   locations: speciesLocation,
//   });
// })
