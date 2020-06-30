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
  if (ids.length === 0) {
    return [];
  }
  /*
  return = animals.filter(animalAtual => animalAtual.id === ids);
  */
  return ids.map(variavelTemp => animals.find(animal => animal.id === variavelTemp));
}

function animalsOlderThan(animal, age) {
  return animals.find(valor => valor.name === animal).residents.every(valor2 => valor2.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(funcionario => funcionario.firstName
=== employeeName || funcionario.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // employee.assign
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  return employees.some(valor => valor.managers.find(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const funcionario = Object.assign({ }, { id }, { firstName }, { lastName },
{ managers }, { responsibleFor });
  employees.push(funcionario);
}


function animalCount(species) {
  const retornaObjeto = {};
  animals.forEach(animal => (retornaObjeto[animal.name] = animal.residents.length));
  if (species === undefined) {
    return retornaObjeto;
  }
  return retornaObjeto[species];
}

function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const ingresso = ((prices.Adult * Adult) + (prices.Senior * Senior) + (prices.Child * Child));
  return ingresso;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const crono = Object.assign({}, hours);
  const dias = Object.keys(crono);
  dias.forEach((dia) => {crono[dia] = `Open from ${crono[dia].open}am until ${crono[dia].close - 12}pm`;
  if (dia === 'Monday') crono[dia] = 'CLOSED';
  });
    if (dayName === undefined) {
      return crono;
  }
  const saida = {};
  saida[dayName] = crono[dayName];
  return saida;
}

function oldestFromFirstSpecies(idProcurado) {
  /*
  const idAnimal = employees.find(pessoa => pessoa.id === idProcurado).responsibleFor[0];
  const animalSenior = animals.find(animal => animal.id === idAnimal).residents.sort[0]
  */
}

function increasePrices(percentage) {
const porcentagem = (percentage / 100) +1;
  prices.Adult = (Math.round(prices.Adult * porcentagem * 100) / 100);
  prices.Senior = (Math.round(prices.Senior * porcentagem * 100) / 100);
  prices.Child = (Math.round(prices.Child * porcentagem * 100) / 100);
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
