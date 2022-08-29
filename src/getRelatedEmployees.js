const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const returnedArr = [];
  const managed = data.employees.filter((employee) => employee.managers.includes(managerId));
  managed.forEach((el) => returnedArr.push(`${el.firstName} ${el.lastName}`));
  if (returnedArr.length <= 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return returnedArr;
}

module.exports = { isManager, getRelatedEmployees };
