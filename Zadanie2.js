const persons = [
    { firstName: false, lastName: 2 },
    { firstName: 'Roman', lastName: 'Kowalski', nickName: 'Namwok' },
    { firstName: 'Halina', lastName: 'Malina', nickName: 'Anilam' },
    { firstName: 'B', lastName: '22' },
    { firstName: 'Jan', lastName: 'Nowak', nickName: 'Najwon' },
    { firstName: 'Kamil', lastName: null }
  ]

  const onlyNicknameAndAge = persons.filter(obj => {
    return obj.nickName;
  })
  .map((obj, index) =>  {
    const sumFirstLastName = obj.firstName.length + obj.lastName.length;

    let objAge = 0;
    sumFirstLastName % 2 === 0 ?  objAge = sumFirstLastName
    : objAge = Object.keys(obj).reduce((previousValue, currentValue) => { 
      return Math.ceil((previousValue + currentValue.length) / (index !== 0 ? index : 1));
    }, 0);
    return {
      firstName: obj.firstName,
      lastName: obj.lastName,
      nickName: obj.nickName,
      age: objAge
  };
  }
);
console.log(onlyNicknameAndAge);
