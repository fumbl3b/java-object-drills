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

function decode(word) {
  let decoded = '';
  if (word[0] === 'a') {
    decoded += word[cipher.a - 1];
  } else if (word[0] === 'b') {
    decoded += word[cipher.b - 1];
  } else if (word[0] === 'c') {
    decoded += word[cipher.c - 1];
  } else if (word[0] === 'd') {
    decoded += word[cipher.d - 1];
  } else {
    decoded += ' ';
  }
  return decoded;
}

function decodeWords(string) {
  let words = string.split(' ');
  let truth = '';
  words.forEach(function (word) {
    truth += decode(word);
  });
  return truth;
}

console.log(decodeWords('cycle basket cycle veranda cycle'));











const characters = [
  createCharacter('Gandalf the White', "gandalf", "wizard", "Middle Earth", 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins', "bilbo", "hobit", "The Shire", 2, 1,  'the ring'),
  createCharacter('Frodo Baggins', 'frodo', 'hobit', 'The Shire', 3, 2, 'a string and barrow blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'elf', 'Woodland Realm', 8, 5, 'a bow and arrow')
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'half-elf', 'Rivendell', 10, 9));

let findAragorn = characters.find(function(character){
  return character['nickname'] === 'aragorn';
});


let hobits = characters.filter(function(isHobit){
  if (isHobit.race === 'hobit'){
    return isHobit;
  }
});

let highAttackValue = characters.filter(function(character){
  if (character.attack > 5){
    return character;
  }
})

findAragorn.describe();

function createCharacter(name, nickname, race, origin, attack, defense, weapon){
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function(){

      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${weapon}`);
      return `${this.name} is a ${this.race} from ${this.origin} who uses ${weapon}`;
    },
    evaluateFight: function(opponent){
      let damage = opponent.attack - this.defense;
      let opponentDamage = this.attack - opponent.defense;
      if (this.defense > opponent.attack){
        damage = 0;
      } else if ((this.attack - opponent.defense) < 0){
        opponentDamage = 0;
      }
      return `Your opponent takes ${opponentDamage} damage and you recieve ${damage} damage`
    },

    weapon: weapon
  
  }
  
}




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
    
}
