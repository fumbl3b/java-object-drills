/* eslint-disable no-console */
'use strict';

let dan = {
  name: 'Daniel',
  jobTitle: 'Engineer',
  boss: 'Michael'
};
let michael = {
  name: 'Michael',
  jobTitle: 'Janitor 1st class'
};
let marisa = {
  name: 'Marisa',
  jobTitle: 'Teacher',
  boss: 'Michael'
};

let people = [dan, michael, marisa];

people.forEach(function (person) {
  console.log(person.jobTitle + '\n' + person.name);
  if (person.boss) {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
  } else {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
  }
});

let cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decode (word) {
  let decoded = '';
  if(word[0] === 'a') {
    decoded += word[cipher.a - 1];
  } else if (word[0] === 'b') {
    decoded += word[cipher.b - 1];
  } else if (word[0] === 'c') {
    decoded += word[cipher.c -1];
  } else if (word[0] === 'd') {
    decoded += word[cipher.d -1];
  } else {
    decoded += ' ';
  }
  return decoded;
}

function decodeWords (string) {
    let words = string.split(' ');
    let truth = '';
    words.forEach(function(word){
        truth += decode(word);
    });
    return truth;
}

console.log(decodeWords('cycle basket cycle veranda cycle'));

