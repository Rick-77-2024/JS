// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

const printArrayElements = (arr) => {
    arr.forEach(item => console.log(item));
};

const newArr = [10, true, 'false', 3.14, 20, null];
printArrayElements(newArr);
