// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const arr = [10,8,-7,55,987,-1011,0,1050,0];

const strtoArr = arr.map(obj => JSON.stringify(obj));

console.log(strtoArr);

