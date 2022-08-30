const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((acc, entrant) => {
    const obj = acc;
    if (entrant.age < 18) {
      obj.child += 1;
    }
    if (entrant.age >= 50) {
      obj.senior += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      obj.adult += 1;
    }
    return obj;
  },
  { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrant = countEntrants(entrants);
  return (entrant.child * data.prices.child)
  + (entrant.adult * data.prices.adult)
  + (entrant.senior * data.prices.senior);
}
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
