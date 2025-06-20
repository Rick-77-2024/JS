// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function printArrayElements(arr) {
    for (let x = 0; x < arr.length; x++) {
        console.log(arr[x]);
    }
}

// Пример использования:
const arr = [10, true, 'false', 3.14, 20, null];
printArrayElements(arr);
