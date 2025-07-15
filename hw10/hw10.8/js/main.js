// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('table');

const tableGeneratorFrom = document.forms['tableGeneratorFrom'];

tableGeneratorFrom.onsubmit = function (e) {
 table.innerText = '';
 e.preventDefault();
 const linesValue = +tableGeneratorFrom.lines.value;
 const cellsValue = +tableGeneratorFrom.cells.value;
 const dataValue = tableGeneratorFrom.data.value;
 console.log(linesValue, cellsValue, dataValue);

 for (let i = 0; i < linesValue; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < cellsValue; j++) {
   const td = document.createElement('td');
   td.innerText = dataValue;
   tr.appendChild(td);
  }

  table.appendChild(tr);

 }

};

