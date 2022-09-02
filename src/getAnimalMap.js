const { species } = require('../data/zoo_data');

// const obj = {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// };

// const ne = species.filter((specie) => specie.location === 'NE').map((specie) => specie.name);
// const nw = species.filter((specie) => specie.location === 'NW').map((specie) => specie.name);
// const se = species.filter((specie) => specie.location === 'SE').map((specie) => specie.name);
// const sw = species.filter((specie) => specie.location === 'SW').map((specie) => specie.name);

const ne = species.filter((specie) => specie.location === 'NE');
const nw = species.filter((specie) => specie.location === 'NW');
const se = species.filter((specie) => specie.location === 'SE');
const sw = species.filter((specie) => specie.location === 'SW');

// const noParamObj = {
//   NE: ne.map((specie) => specie.name),
//   NW: nw.map((specie) => specie.name),
//   SE: se.map((specie) => specie.name),
//   SW: sw.map((specie) => specie.name),
// };

function getAnimalMap(options) {
  // seu código aqui
  // if (options.includeNames) {
  if (options.includeNames === true) {
    return {
      NE: ne.map((specie) => ({ [specie.name]: specie.residents.map((sp) => sp.name) })),
      NW: nw.map((specie) => ({ [specie.name]: specie.residents.map((sp) => sp.name) })),
      SE: se.map((specie) => ({ [specie.name]: specie.residents.map((sp) => sp.name) })),
      SW: sw.map((specie) => ({ [specie.name]: specie.residents.map((sp) => sp.name) })),
    };
  }
}
// ALL RETURN
// return noParamObj;
// }

// console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
