/**
 * peopleAndPets
write peopleAndPets
returns all the users and an array of the pets that user owns
 */

//TODO
//const peopleAndPets = () => {
//return people.map(person => {return person})
//}

const peopleAndPets = () => {
  let results = [];
  people.forEach((person) => {
    person.pets = [];
    ownerships.forEach((ownership) => {
      if (ownership.personId === person.id) {
        const pet = pets.find((pet) => pet.id === ownership.petId);
        person.pets.push(pet);
      }
    });
    results.push(person);
  });
  return results;
};

const pets = [
  { id: 1, name: "Fido" },
  { id: 2, name: "Rex" },
  { id: 3, name: "Fluffy" },
];

const people = [
  { id: 1, name: "Prof" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Stanley" },
  { id: 4, name: "Ben" },
];

const ownerships = [
  { personId: 2, petId: 2 },
  { personId: 3, petId: 2 },
  { personId: 3, petId: 3 },
];

console.log(peopleAndPets());
/*
  [
    {
      "id": 1,
      "name": "Prof",
      "pets": []
    },
    {
      "id": 2,
      "name": "Pete",
      "pets": [
        {
          "id": 2,
          "name": "Rex"
        }
      ]
    },
    {
      "id": 3,
      "name": "Stanley",
      "pets": [
        {
          "id": 2,
          "name": "Rex"
        },
        {
          "id": 3,
          "name": "Fluffy"
        }
      ]
    },
    {
      "id": 4,
      "name": "Ben",
      "pets": []
    }
  ] */
