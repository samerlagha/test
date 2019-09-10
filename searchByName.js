
let arr =[ { name:'Jonny Walker',  
    BirthdDate:'1995-12-17' },
        {  name:'Andrew',  
          BirthdDate:'2001-10-29' }
         ]
     


//const searchByName = (users, userName) => users.filter(user => user.name === userName);
const searchByName = function(users, userName) {
  return users.filter(user => user.name === userName);
}

console.log(searchByName(arr, 'Jonny Walker'));
    