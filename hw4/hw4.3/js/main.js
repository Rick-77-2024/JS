// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function SquareofCilinder(r, h) {
    const perameters = 2 * 3.14 * r * h + 2 * 3.14 * r * r;
    return perameters;
}

const r = 8;
const h = 16;
const area = SquareofCilinder(r, h);
console.log('Square of cilinder: ' + area);
