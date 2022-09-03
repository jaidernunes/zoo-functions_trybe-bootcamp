// const { species } = require('../data/zoo_data');

// const ne = species.filter((specie) => specie.location === 'NE');
// const nw = species.filter((specie) => specie.location === 'NW');
// const se = species.filter((specie) => specie.location === 'SE');
// const sw = species.filter((specie) => specie.location === 'SW');

// const noParamObj = {
//   NE: ne.map((specie) => specie.name),
//   NW: nw.map((specie) => specie.name),
//   SE: se.map((specie) => specie.name),
//   SW: sw.map((specie) => specie.name),
// };

// const namesNE = ne.map((specie) => ({ [specie.name]: specie.residents.map((sp) => sp.name) }));
// const namesNw = nw.map((specie) => ({ [specie.name]: specie.residents.map((sp) => sp.name) }));
// const namesSE = se.map((specie) => ({ [specie.name]: specie.residents.map((sp) => sp.name) }));
// const namesSW = sw.map((specie) => ({ [specie.name]: specie.residents.map((sp) => sp.name) }));

// const includeNamesObj = {
//   NE: namesNE,
//   NW: namesNw,
//   SE: namesSE,
//   SW: namesSW,
// };

// const namesNEsort = ne.map((s) => ({ [s.name]: s.residents.map((sp) => sp.name).sort() }));
// const namesNwsort = nw.map((s) => ({ [s.name]: s.residents.map((sp) => sp.name).sort() }));
// const namesSEsort = se.map((s) => ({ [s.name]: s.residents.map((sp) => sp.name).sort() }));
// const namesSWsort = sw.map((s) => ({ [s.name]: s.residents.map((sp) => sp.name).sort() }));

// const includeNamesObjSorted = {
//   NE: namesNEsort,
//   NW: namesNwsort,
//   SE: namesSEsort,
//   SW: namesSWsort,
// };

// const maleSort = {
//   NE: ne.map((s) => ({ [s.name]: s.residents.filter((x) => x.sex === 'male').map((sp) => sp.name) })),
//   NW: nw.map((s) => ({ [s.name]: s.residents.filter((x) => x.sex === 'male').map((sp) => sp.name) })),
//   SE: se.map((s) => ({ [s.name]: s.residents.filter((x) => x.sex === 'male').map((sp) => sp.name) })),
//   SW: sw.map((s) => ({ [s.name]: s.residents.filter((x) => x.sex === 'male').map((sp) => sp.name) })),
// };
// const femaleSort = {
//   NE: ne.map((s) => ({ [s.name]: s.residents.filter((x) => x.sex === 'female').map((sp) => sp.name) })),
//   NW: nw.map((s) => ({ [s.name]: s.residents.filter((x) => x.sex === 'female').map((sp) => sp.name) })),
//   SE: se.map((s) => ({ [s.name]: s.residents.filter((x) => x.sex === 'female').map((sp) => sp.name) })),
//   SW: sw.map((s) => ({ [s.name]: s.residents.filter((x) => x.sex === 'female').map((sp) => sp.name) })),
// };

function getAnimalMap(options) {
  // seu código aqui
  // if (options && options.includeNames) {
  //   if (options.sorted === true) {
  //     if (options.sex === 'male') {
  //       return maleSort;
  //     };
  //     if (options.sex === 'female') {
  //       return femaleSort;
  //     };
  //     }
  //     return includeNamesObjSorted;
  //   }
  //   return includeNamesObj;
  // return noParamObj;
}

// console.log(getAnimalMap());

module.exports = getAnimalMap;
