
let arr =[ { name:'Jonny Walker',  
    BirthdDate:'1995-12-17' },
        {  name:'Andrew',  
          BirthdDate:'2001-10-29' }
         ]
     
// auther answer
function searchByName2(users, userName)
{
    return users.filter(function(user) {
        return user.name.indexOf(userName) != -1;
    });
}
  console.log( searchByName2(arr,'Andrew'));
//const searchByName = (users, userName) => users.filter(user => user.name === userName);
const searchByName = function(users, userName) {
  return users.filter(user => user.name === userName);
}

console.log(searchByName(arr, 'Jonny Walker'));
    
