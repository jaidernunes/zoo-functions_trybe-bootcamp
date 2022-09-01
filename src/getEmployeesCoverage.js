/* eslint-disable max-lines-per-function */
// const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const returnedObj = {
  id: 'id',
  fullName: 'name last',
  species: [],
  locations: [],
};

const allObject = {
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: species.filter((specie) => employee.responsibleFor.includes(specie.id)).map((specie) => specie.name),
  locations: species.filter((specie) => employee.responsibleFor.includes(specie.id)).map((specie) => specie.location),
};

const allEmployeesArr = [];

function getEmployeesCoverage(employeeRef) {
  // seu código aqui
  return employees.map((employee) => allObject);
}

// 3 reqs ok !!!!!!! \/
  // if ((employee) => (employee.id === employeeRef.id
  //   || employee.firstName === employeeRef.name
  //   || employee.lastName === employeeRef.name)) {
  //   const findEmployee = employees.find((employee) => (employee.id === employeeRef.id
  //       || employee.firstName === employeeRef.name
  //       || employee.lastName === employeeRef.name));
  //   const findSpecie = species.filter((specie) => findEmployee.responsibleFor.includes(specie.id));
  //   const speciesNames = findSpecie.map((specie) => specie.name);
  //   const speciesLocation = findSpecie.map((specie) => specie.location);
  // }
  // returnedObj.id = findEmployee.id;
  // returnedObj.fullName = `${findEmployee.firstName} ${findEmployee.lastName}`;
  // returnedObj.species = speciesNames;
  // returnedObj.locations = speciesLocation;
  // return returnedObj;

  // ALL RETURN - VALORES RETORNAM SEMPRE DO PRIMEIRO FOREACH
  // const allEmployees = () => employees.forEach((employee) => {
  //   const findSpecie = species.filter((specie) => employee.responsibleFor.includes(specie.id));
  //   const speciesNames = findSpecie.map((specie) => specie.name);
  //   const speciesLocation = findSpecie.map((specie) => specie.location);
  //   returnedObj.id = employee.id;
  //   returnedObj.fullName = `${employee.firstName} ${employee.lastName}`;
  //   returnedObj.species = speciesNames;
  //   returnedObj.locations = speciesLocation;
  //   allEmployeesArr.push(returnedObj);
  // });
console.log(getEmployeesCoverage());
// '4b40a139-d4dc-4f09-822d-ec25e819a5ad'
module.exports = getEmployeesCoverage;
