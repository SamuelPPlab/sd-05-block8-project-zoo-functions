/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals } = data;

const { employees } = data;

const { prices } = data;

function animalsByIds(...ids) {
  const animalWithId = [];
  animals.forEach((animal, index) => {
    if (animal.id === ids[index]) {
      animalWithId.push(animal);
    }
  });
  return animalWithId;
}

function animalsOlderThan(animal, age) {
  const animalSelected = animals.filter(eachAnimal => eachAnimal.name === animal);
  return animalSelected[0].residents.every(ani => ani.age > age);
}

function employeeByName(employeeName) {
  return (employeeName == null) ?
  {} :
  employees.filter(({ firstName, lastName }) =>
  (firstName === employeeName || lastName === employeeName))[0];
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const animalsTotal = {};
  animals.forEach(({ name, residents }) => (animalsTotal[name] = residents.length));
  return (species == null) ? animalsTotal : animalsTotal[species];
}

function entryCalculator(entrants = 0) {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (entrants === {}) ? 0 :
  ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
