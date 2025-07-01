// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let array = [20, 4, -15, 8, 25];

const sum = (arr) => {
    let arraySum = 0;
    for(let x = 0; x < arr.length; x++){
        arraySum += arr[x];
    }
    console.log(arraySum);
}
sum(array);
