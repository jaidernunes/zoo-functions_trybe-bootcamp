// const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

// const returnedObj = {
//   id: findEmployee.id,
//   fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
//   species: speciesNames,
//   locations: speciesLocation,
// };
// const returnedObj = {
//   id: 'id',
//   fullName: 'name last',
//   species: [],
//   locations: [],
// };

function getEmployeesCoverage(eR) {
  if (eR === undefined) {
    return employees.map((e) => ({ id: e.id,
      fullName: `${e.firstName} ${e.lastName}`,
      species: species.filter((spc) => e.responsibleFor.includes(spc.id)).map((sp) => sp.name),
      locations: species.filter((s) => e.responsibleFor.includes(s.id)).map((s) => s.location) }));
  }
  if (!employees.some((e) => e.id === eR.id || e.firstName === eR.name || e.lastName === eR.name)) {
    throw new Error('Informações inválidas');
  }
  const findEmployee = employees.find((e) => (e.id === eR.id || e.firstName === eR.name
    || e.lastName === eR.name));
  const findSpecie = species.filter((specie) => findEmployee.responsibleFor.includes(specie.id));
  const speciesNames = findSpecie.map((specie) => specie.name);
  const speciesLocation = findSpecie.map((specie) => specie.location);
  return { id: findEmployee.id,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
    species: speciesNames,
    locations: speciesLocation };
}

module.exports = getEmployeesCoverage;

// 3 reqs ok !!!!!!! \/
// const findEmployee = employees.find((employee) => (employee.id === employeeRef.id
//   || employee.firstName === employeeRef.name
//   || employee.lastName === employeeRef.name));
// const findSpecie = species.filter((specie) => findEmployee.responsibleFor.includes(specie.id));
// const speciesNames = findSpecie.map((specie) => specie.name);
// const speciesLocation = findSpecie.map((specie) => specie.location);

// returnedObj.id = findEmployee.id;
// returnedObj.fullName = `${findEmployee.firstName} ${findEmployee.lastName}`;
// returnedObj.species = speciesNames;
// returnedObj.locations = speciesLocation;
// return returnedObj;
// }

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
