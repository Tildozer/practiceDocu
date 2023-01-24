/*
findPopularPeople - those with more than one friend!
findPopularPeople
takes an array of objects
each object can have a list of friends
returns the names of users who have more than one friend
*/

//TODO
/* 
const findPopularPeople = (people) => {
  let mostPop;
  for(let key in people){
    let person = people[key];
    if(!mostPop){
      mostPop = person;
    }
    //if(person.friends.length > mostPop.friends.length){
     //mostPop = person
   // }
  }
}
Didn't finish, profs answer below
*/

const findPopularPeople = () => {
  return people
    .filter((person) => person.friends && person.friends.length > 1)
    .map((person) => person.name);
};

const people = [
  {
    name: "moe",
    friends: [
      {
        name: "larry",
      },
      {
        name: "curly",
      },
    ],
  },
  {
    name: "lucy",
  },
  {
    name: "ethyl",
    friends: [{ name: "lucy" }],
  },
];
console.log(findPopularPeople(people)); //['moe']
