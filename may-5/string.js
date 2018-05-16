let sideKicks = [
  {name: "Robin",   hero: "Batman" },
  {name: "Supergirl",   hero: "Superwoman" },
  {name: "Oracle",   hero: "Mesus" },
  {name: "Krypto",   hero: "Wendell" }
];

// let batKicks = [];

//option 1 //
// for( let i = 0; i< sidekicks.length; i++) {
//  if (sidekicks[i].hero === 'Batman') {
//    batKicks.push(sidekicks[i])
//  }
// }

// option 2//
// let batKicks = sideKicks.filter((sideKick) => {
//   return sideKick.hero === 'Batman';
// }

//option 3 //
let batKicks = sideKicks.filter(sideKicks => sideKicks.hero === 'Batman')

let superKicks = sideKicks.filter(sideKicks => sidekicks.hero === 'Wendell');

console.log('Batkicks', batKicks);
console.log('SuperKicks', superKicks);
