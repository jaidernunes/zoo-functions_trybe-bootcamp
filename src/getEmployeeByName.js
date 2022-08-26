const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(anyName) {
  // seu código aqui
  if (anyName) {
    return employees.find((name) => name.firstName === anyName || name.lastName === anyName);
  }
  return {};
}

module.exports = getEmployeeByName;
