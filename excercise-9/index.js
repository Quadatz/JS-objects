const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  ];
   
  console.log(getSortedNames(users)); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']

  function getSortedNames(users) {
    const names = users.map(item => item.name);
    return names.sort()
  }