/* eslint-disable no-console */
'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  const found = arr.find(function (hero){
    for(const property in hero) {
      if (hero[property] === query[property]){
        return true;
      }
      else {
        return false;
      }
    }
  });
  return found;
}

let test = {
  id: 2
};

console.log(test);
console.log(HEROES[4]);
console.log(findOne(HEROES,test));