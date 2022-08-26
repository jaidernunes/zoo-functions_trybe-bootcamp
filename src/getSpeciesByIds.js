// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((value) => ids.includes(value.id));
}
// conceito ficou claro e consegui resolver meu erro na mentoria com a inigualável Nat

module.exports = getSpeciesByIds;
