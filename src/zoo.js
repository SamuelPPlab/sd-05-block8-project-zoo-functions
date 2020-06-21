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
const { animals, employees, prices } = require('./data');

function animalsByIds(...ids) {
  /* let filter=[]
  if ( ids === undefined){
    return filter;
  } else if (ids) {
   filter = ids.forEach(index => animals.filter(element => element.id === index))
   .reduce((acc, value) => acc + value)
    return filter
  }
  } */
}

function animalsOlderThan(animal, age1) {
  const newArray = animals.filter(element => element.name === animal);
  const verifyAge = newArray.every(item => item.residents.every(key => key.age >= age1));
  return verifyAge;
}

function employeeByName(employeeName = {}) {
  let obj = {};
  employees.forEach((element) => {
    if (element.firstName === employeeName) {
      obj = element;
    } else if (element.lastName === employeeName) {
      obj = element;
    }
  });
  return obj;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign({}, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  const verifyEach = employees.map(element => element.managers.includes(id));
  const veryfy = verifyEach.some(element => element === true);
  return veryfy;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEMployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEMployee);
  return employees;
}

function animalCount(species) {
  if (species === undefined) {
    const obj = {};
    animals.map(({ name, residents }) => [name, residents.length])
    .forEach(({ 0: name, 1: length }) => {
      obj[name] = length;
    });
    return obj;
  }
  let count = 0;
  const newArray = animals.filter(animal => animal.name === species);
  newArray.forEach(element => (count = element.residents.length));
  return count;
}

function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  } else if (Object.entries(entrants).length === 0) {
    return 0;
  }
  const total = [];
  const { Adult, Child, Senior } = entrants;
  const pricesarray = [prices];
  pricesarray.forEach(element => ({
    total.push((element.Adult * Adult),
    (element.Child * Child),
    (element.Senior * Senior))
  }));
  const result = total.reduce((acc, index) => acc + index);
  return result;
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
