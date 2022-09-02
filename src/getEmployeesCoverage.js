// const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

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
