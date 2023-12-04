const sleepHours = {
  monday: 7,
  tuesday: 6,
  wednesday: 8,
  thursday: 7,
  friday: 6,
  saturday: 9,
  sunday: 8,
  idealHoursDay: 8,
};

const workHours = 8;

const activities = [
  { name: 'Gym', time: 5 },
  { name: 'Party', time: 4 },
  { name: 'Watch TV', time: 6 },
  { name: 'Read', time: 5 },
];

// Retorna les hores que dormim en un dia específic que passem per paràmetre
const getSleepHours = (day) => {
  return sleepHours[day];
};

// Sumem les hores de cada dia fins diumenge
// Compte perquè "idealHoursDay" no és un dia de la setmana
// Per tant, no el podem sumar
// I si volem treballar amb iteració, hem de passar els dies a un array --> Object.keys(sleepHours)
const getActualSleepHours = () => {
  let totalHours = 0;
  // Amb Object.keys(sleepHours) obtenim un array amb les hores dormides aquella setmana
  const days = Object.keys(sleepHours);
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    // Compte, no volem suma els caps de setmana ni les hores ideals
    if (day !== 'saturday' && day !== 'sunday' && day !== 'idealHoursDay') {
      totalHours += getSleepHours(day);
    }
  }
  console.log(totalHours);
  return totalHours;
};

// Multipliquem les hores que volem dormir per dia per 7 dies
const getIdealSleepHours = () => {
  return sleepHours.idealHoursDay * 7;
};

//Calculem les hores lliures tenint en compte les hores treballades i les hores
//dormides realment sense caps de setmana.
const getFreeTimeHours = () => {
  const hoursWeek = 24 * 5;
  const hoursWorked = workHours * 5;
  return hoursWeek - hoursWorked - getActualSleepHours();
};

// Calculem el temps total que duren totes les activitats que ens hem proposat
const calculateActivityTime = (activities) => {
  let totalHours = 0;
  for (let i = 0; i < activities.length; i++) {
    totalHours += activities[i].time; // . time porque es un objeto y queremos acceder a la propiedad time
  }
  return totalHours;
};

// En funció del temps que tenim lliure, podem fer totes les activitats o no
const canDoActivities = (activities) => {
  const freeTime = getFreeTimeHours();
  console.log(freeTime);
  const totalActivityTime = calculateActivityTime(activities);
  console.log(totalActivityTime);
  if (freeTime >= totalActivityTime) {
    return 'Pots fer totes les activitats';
  } else {
    return 'No pots fer totes les activitats';
  }
};

module.exports = {
  getSleepHours,
  getActualSleepHours,
  getIdealSleepHours,
  getFreeTimeHours,
  calculateActivityTime,
  canDoActivities,
};
