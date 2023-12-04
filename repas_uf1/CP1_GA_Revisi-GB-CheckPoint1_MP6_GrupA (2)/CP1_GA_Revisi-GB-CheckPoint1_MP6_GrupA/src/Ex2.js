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
  { name: "Gym", time: 5 },
  { name: "Party", time: 4 },
  { name: "Watch TV", time: 6 },
  { name: "Read", time: 5 },
];

const getSleepHours = (day) => {
  return sleepHours[day];
};

const getActualSleepHours = () => {
  let horesTotals = 0;
  const dies = Object.keys(sleepHours);

  for (let i = 0; i < dies.length; i++) {
    const dia = dies[i];
    if (dia != "saturday" && dia != "sunday" && dia != "idealHoursDay") {
      horesTotals += getSleepHours(dia);
    }
  }
  return horesTotals;
};

// Multipliquem les hores que volem dormir per dia per 7 dies
const getIdealSleepHours = () => {
  return sleepHours.idealHoursDay * 7;
};

//Calculem les hores lliures tenint en compte les hores treballades i les hores
//dormides realment sense caps de setmana.
const getFreeTimeHours = () => {
  const horesWeek = 24 * 5;
  const horesWohrked = workHours * 5;
  const horesFree = horesWeek - horesWohrked;
  return horesFree;
};

// Calculem el temps total que duren totes les activitats que ens hem proposat
const calculateActivityTime = (activities) => {
  let horessTotals = 0;
  for (let i = 0; i < activities.length; i++) {
    horesTotals += activities[i].time;
  }
  return horessTotals;
};

// En funció del temps que tenim lliure, podem fer totes les activitats o no
const canDoActivities = (activities) => {
  horesLliure = getFreeTimeHours();
  horesActivitats = calculateActivityTime(activities);
  
  if (totalHoresActivitats <= tempsLliure) {
    return "Pots fer totes les activitats";
  } else {
    return "No pots fer totes les activitats";
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
