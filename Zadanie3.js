const people = [
  {
    firstName: "Roman",
    lastName: "Kowalski",
    nickName: "Namwok",
    age: 25,
  },
  {
    firstName: "Halina",
    lastName: "Malina",
    nickName: "Anilam",
    age: 12,
  },
  { firstName: "Jan", lastName: "Nowak", nickName: "Najwon", age: 8 },
];

const findMostCommonLetter = people.map((obj) => {
  const concatenatedValue = (obj.firstName + obj.lastName + obj.nickName)
    .toLowerCase()
    .split("");
  const letterCount = {};

  concatenatedValue.forEach((letter) => {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  });

  let mostFrequentLetter = null;
  let highestCount = 0;

  Object.keys(letterCount).forEach((letter) => {
    if (
      letterCount[letter] > highestCount ||
      (letterCount[letter] === highestCount && letter < mostFrequentLetter)
    ) {
      mostFrequentLetter = letter;
      highestCount = letterCount[letter];
    }
  });

  return {
    firstName: obj.firstName,
    lastName: obj.lastName,
    nickName: obj.nickName,
    age: obj.age,
    mostCommonLetter: { letter: mostFrequentLetter, count: highestCount },
  };
});

console.log(findMostCommonLetter);
