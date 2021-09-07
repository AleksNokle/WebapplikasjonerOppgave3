const names = [
    'Trude',
    'Simen',
    'Lars',
    'Ali',
    'Finn',
    'Kåre',
    'Hanne',
    'Abuyin ibn Djadir ibn Omar Kalid ben Hadji al Sharidi',
    'Åse',
    'Anne',
    'Amanda',
    'Morgan',
    'Dale',
    'Keith',
    'Shana',
    'Britney',
    'Nicholas',
    'Scarlett',
    'Will',
    'Edgar',
    'Polly',
    'Phil',
    'Max',
    'Esmond',
    'Rachel',
    'Estelle',
    'Eddie',
    'Abigail',
    'Ingram',
    'Christian',
    'Weston',
    'Chandler',
    'Hazel',
    'Sharon'
  ];
  
  export const users = [];
  
  const createRandomAge = () => {
    return Math.floor(Math.random() * 100 + 1);
  };
  
  const createUsers = (userCount) => {
    for (let i = 0; i < userCount; i++) {
      const user = {
        id: i,
        name: names[i],
        age: createRandomAge(),
      };
      users.push(user);
    }
  };
  
  createUsers(33);