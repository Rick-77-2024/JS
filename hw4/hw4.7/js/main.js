// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function TextUlLiFor(text, count) {
    document.write("<ul>");
    for (let x = 0; x < count; ++x) {
        document.write("<li>" + text + "</li>");
    }
    document.write("</ul>");
}
    TextUlLiFor("Text LI", 5);


// function createUl(text, ind) {
//     const ul = document.createElement("ul");
//     for (let i = 0; i < ind; ++i) {
//         const li = document.createElement("li");
//         li.textContent = text;
//         ul.append(li)
//     }
//
//     const wp = document.getElementById('wrapper');
//     wp.append(ul);
// }
// createUl('hello', 5)