
//изменение темы
 
let body = document.querySelector("body");
function changeMe () {
    const option = document.querySelector("option:checked");
    const color = option.value;
    body.style.backgroundColor = color;
}

/* let collection = document.getElementsByTagName("body");

switch(changeMe()) {

    case "white":
      
let body = collection[0]
body.style.backroundColor='white';

      case "black":
       
        let body = collection[1]
        .style.backroundColor='black'; break;

  case "blue":
  let body = collection[2]
    .style.backroundColor='blue'; break;
  
}

*/

//сложение 
function sum() {
  let n1 = document.getElementById('num1').value;
  let n2 = document.getElementById('num2').value;
 let result = +n1 + +n2;
 document.getElementById('out').innerHTML = result;
}

//вычитание
function substract() {
  let n1 = document.getElementById('num1').value;
 let n2 = document.getElementById('num2').value;

 let result = +n1 - +n2;
 document.getElementById('out').innerHTML = result;
}

//умножнение

function multiplication() {
  let n1 = document.getElementById('num1').value;
  let n2 = document.getElementById('num2').value;

  let result = +n1 * +n2;
  document.getElementById('out').innerHTML = result;
}

//деление
function division() {
 let n1 = document.getElementById('num1').value;
 let n2 = document.getElementById('num2').value;
 let result; 

 if (n2 === '0') { 
  result = "На 0 делить нельзя!";
} else { 
  result = +n1 / +n2;
}

  document.getElementById('out').innerHTML = result;
}
