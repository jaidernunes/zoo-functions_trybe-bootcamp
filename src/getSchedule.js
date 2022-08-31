const data = require('../data/zoo_data');

const office = (day) => `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
const exhibit = (day) => {
  const arr = data.species.filter((specie) => specie.availability.includes(day));
  return arr.map((specie) => specie.name);
};
const week = {
  Tuesday: { officeHour: office('Tuesday'), exhibition: exhibit('Tuesday') },
  Wednesday: { officeHour: office('Wednesday'), exhibition: exhibit('Wednesday') },
  Thursday: { officeHour: office('Thursday'), exhibition: exhibit('Thursday') },
  Friday: { officeHour: office('Friday'), exhibition: exhibit('Friday') },
  Saturday: { officeHour: office('Saturday'), exhibition: exhibit('Saturday') },
  Sunday: { officeHour: office('Sunday'), exhibition: exhibit('Sunday') },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getSchedule(scheduleTarget) {
  if (data.species.some((specie) => specie.name === scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (daysArr.some((day) => day === scheduleTarget)) {
    const dayObj = { [scheduleTarget]: week[scheduleTarget] };
    return dayObj;
  }
  return week;
}

module.exports = getSchedule;
