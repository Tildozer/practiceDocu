/*
findFriendPairs
findFriendPairs
takes an array of objects
each object can have a list of friends
returns the pairs of friends
*/

const findFriendPairs = (people) => {
  const peopleWithFriends = people.filter((person) => person.friends);
  const names = peopleWithFriends.map((person) => person.name);
  const friendsList = peopleWithFriends.map((person) =>
    person.friends.map((friend) => friend.name)
  );

  return friendsList
    .map((friends, idx) => friends.map((friend) => [names[idx], friend]))
    .flat();
};

// that took me to long to do...
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
console.log(findFriendPairs(people)); //[['moe', 'larry'], ['moe', 'curly'], ['ethyl', 'lucy']]
