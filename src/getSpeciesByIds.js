// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids) {
    return data.species.filter((value) => ids.includes(value.id));
  }
  return [];
}
// conceito ficou claro e consegui resolver meu erro na mentoria com a inigualável Nat
getSpeciesByIds();

module.exports = getSpeciesByIds;
