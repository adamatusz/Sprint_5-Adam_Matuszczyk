const persons = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski", // nickname: "Namwok"
  },

  {
    firstName: "Halina",
    lastName: "Malina", // nickname: "Anilam"
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak", // nickname: Najwon
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

const newArray = persons.map((person) => {
  if (
    typeof person.firstName === "string" &&
    person.firstName.length >= 3 &&
    typeof person.lastName === "string" &&
    person.lastName.length >= 3
  ) {
    const arrayFromPersonFirstName = person.firstName.match(/./gu); // musiałem regexem strasznie śmieszne
    const arrayFromPersonLastName = person.lastName.match(/./gu);
    const nickName = [].concat(
      arrayFromPersonFirstName[
        arrayFromPersonFirstName.length - 1
      ].toUpperCase(),
      arrayFromPersonFirstName[arrayFromPersonFirstName.length - 2],
      arrayFromPersonFirstName[
        arrayFromPersonFirstName.length - 3
      ].toLowerCase(),
      arrayFromPersonLastName[2],
      arrayFromPersonLastName[1],
      arrayFromPersonLastName[0].toLowerCase()
    );
    return {
      firstName: person.firstName,
      lastName: person.lastName,
      nickName: nickName.join(""),
    };
  } else
    return {
      firstName: person.firstName,
      lastName: person.lastName,
    };
});
console.log("Dane wejściowe:", persons);
console.log("Dane wyjściowe:", newArray);
