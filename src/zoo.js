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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  const testArray = [];
  ids.forEach(id => testArray.push(...animals.filter(list => id === list.id)));
  return testArray;
}

function animalsOlderThan(animalName, age) {
  const especieAnimal = animals.find(animal => animal.name === animalName);
  return especieAnimal.residents.every(nameAnimal => nameAnimal.age > age);
}

function employeeByName(employeeName) {
  const funcionario = employees.find(
    nomeFuncionario =>
      nomeFuncionario.firstName === employeeName ||
      nomeFuncionario.lastName === employeeName);
  return funcionario || {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const verficaGerente = employees.some(gerente =>
    gerente.managers.find(idGerente => idGerente === id));
  return verficaGerente;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const countSpecies = {};
  animals.forEach((animal) => {
    countSpecies[animal.name] = animal.residents.length;
  });

  return species
    ? animals.find(nomeAnimal => nomeAnimal.name === species).residents.length
    : countSpecies;
}

function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }

  const { Adult, Senior, Child } = entrants;
  const calculoEntradas =
    (prices.Adult * Adult) + (prices.Senior * Senior) + (prices.Child * Child);
  return calculoEntradas;
}

function animalMap(options) {
  // seu código aqui
}
// 1. Sem parâmetros, retorna um cronograma legível para humanos
// 2. Se um único dia for passado, retorna somente este dia em um
// formato legível para humanos
function setSchedule(open, close) {
  if (open === 0 && close === 0) {
    return 'CLOSED';
  } return `Open from ${open}am until ${close - 12}pm`;
}

function schedule(dayName) {
  const rotina = {};
  if (dayName === undefined) {
    Object.keys(hours).forEach(
      day => (rotina[day] = setSchedule(hours[day].open, hours[day].close)));
  } else {
    rotina[dayName] = setSchedule(hours[dayName].open, hours[dayName].close);
  }
  return rotina;
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
