const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
  if (Array.isArray(team)) {
    return team.
      map(item => typeof item === 'string' ? item.trim()[0].toUpperCase() : '').
      sort((a,b) => a > b ? 1 : -1).
      join('');
  } else {
    return false
  }
  
};

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])); //` => `'ADMM'`
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])); // => `'LOO'`
// console.log(createDreamTeam([
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ]));