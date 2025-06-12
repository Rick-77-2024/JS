// #4WrHwFTEop0
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let x = 0
document.write(`<h3 style="color: red"> Пользователи со статусом "true"</h3>`);

for (const user of users) {
    if (user.status) {
        document.write(`<h3 style="color: cornflowerblue"> ${user.name} со статусом ${user.status}</h3>`);
        // x++;
    }
}

document.write(`<h3 style="color: red"> Пользователи со статусом "false"</h3>`);

for (const user of users) {
    if (!user.status) {
        document.write(`<h3 style="color: cornflowerblue"> ${user.name} со статусом ${user.status}</h3>`);
        // x++;
    }
}

document.write(`<h3 style="color: red"> Пользователи старше 30 лет</h3>`);

for (const user of users) {
    if (user.age > 30) {
        document.write(`<h3 style="color: cornflowerblue"> ${user.name} ${user.age} год</h3>`);
        // x++;
    }
}




