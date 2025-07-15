// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1

let counter = localStorage.getItem('counter');
    counter++;
    localStorage.setItem('counter', counter);

document.getElementById('counter').textContent = counter;
