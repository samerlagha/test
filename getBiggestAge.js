let arr =[ { name:'Jonny Walker',  
    BirthdDate:'1995-12-17' },
        {  name:'Andrew',  
          BirthdDate:'2001-10-29' }
         ]
     

//это мой второй вариант
function getBiggestAge(users)
{
    return users.reduce(function(prev, current) {
        return (prev.BirthdDate < current.BirthdDate) ? prev : current
    });
}

console.log(getBiggestAge(arr));

     //это была моя первая версия решения
function getBiggestAge(BirthdDate1, BirthdDate2) {

    if(BirthdDate1 > BirthdDate2){
  // BirthdDate1 > BirthdDate2
  console.log('самого  старого объекта: '+BirthdDate2);
   }  if(BirthdDate1 < BirthdDate2){
      console.log('самого  старого объекта: ' +BirthdDate1);
   }
}

 getBiggestAge('1995-12-17','2001-10-29');
