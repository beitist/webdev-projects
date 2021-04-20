"use strict"

//const buttons = document.querySelectorAll('button');
let input = document.querySelector('#userInput');
//let prevAnswer = [];
//let hint = document.querySelector('.hint');

input.value = 0;

let calculation = {
    firstNum : '',
    secondNum : '',
    operator : '',
    total : '',
    reset : function () {
        calculation.firstNum = '';
        calculation.secondNum = '';
        calculation.operator = '';
        calculation.total = '';
        decimalButton.disabled = false;
    },
    solve : function () {
        if (calculation.operator == '+') {
            calculation.total = calculation.firstNum + calculation.secondNum;
        } else if (calculation.operator == '-') {
            calculation.total = calculation.firstNum - calculation.secondNum;
        } else if (calculation.operator == 'x') {
            calculation.total = calculation.firstNum * calculation.secondNum;
        } else if (calculation.operator == '/') {
            calculation.total = calculation.firstNum / calculation.secondNum;
        } else if (calculation.operator == '%') {
            //not implemented yet.
        }
        return calculation.total;
    }  
};

let numberButtons = document.querySelectorAll('.btn-number');
let operatorButtons = document.querySelectorAll('.btn-operator');
const decimalButton = document.getElementById('decimal-point');
const equalButton = document.getElementById('equal-button');

numberButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log("Yeah!");
        if (calculation.operator == '') {
            calculation.firstNum += button.value;
            input.value = calculation.firstNum;
        } else {
            calculation.secondNum += button.value;
            input.value = calculation.secondNum;
        };
    });
});

operatorButtons.forEach(function (button) {
    button.addEventListener('click', function() {
        if (calculation.firstNum == '') {
            calculation.firstNum = 0;
        }
        calculation.operator = button.value;
        input.value = '';
        decimalButton.disabled = false;
    });
});

decimalButton.addEventListener('click', function () {
    if (decimalButton.disabled == false) {
        if (calculation.operator == '') {
            if (calculation.firstNum == '') { 
                calculation.firstNum += '0.';
            } else {
                calculation.firstNum += '.';
            }
            input.value = calculation.firstNum;
            decimalButton.disabled = true;
        } else {
            if (calculation.secondNum == '') {
                calculation.secondNum += '0.';
            } else {
                calculation.secondNum += '.';
            }
            input.value = calculation.secondNum;
            decimalButton.disabled = true;
        }
    } 
});

equalButton.addEventListener('click', function () {
    if (calculation.operator == '') {
        input.value = calculation.firstNum;
        calculation.reset();
    } else if (calculation.operator != '') {
        if (calculation.secondNum == '') {
            input.value = calculation.firstNum;
            calculation.reset();
        } else {
            input.value = calculation.solve();
            calculation.reset(); 
        };
    };
})


// buttons.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         if (isNaN(Number(btn.value)) && operator == '' && btn.value != '.' && btn.value != '%' && btn.value != '=' && btn.value != 'back') {
//             operator += btn.value;
//         } // Add decimal to firstNum only once
//         else if (operator === '' && btn.value != '=' && btn.value != 'back' && btn.classList != 'btn-operator') {
//             if (firstNum == '') {
//                 if (firstNum.includes('.') && btn.value == '.') {
//                     btn.disabled = true;
//                 } else {
//                     firstNum += btn.value;
//                     input.value = firstNum;
//                 }
//                 btn.disabled = false;
//             } else {
//                 firstNum = '';
//                 if (firstNum == '') {
//                     if (firstNum.includes('.') && btn.value == '.') {
//                         btn.disabled = true;
//                     } else {
//                         firstNum += btn.value;
//                         input.value = firstNum;
//                     }
//                     btn.disabled = false;
//                 }
//             }
//         } //Add decimal to secondNum only once
//         else if (firstNum != '' && operator != '' && btn.value != '=' && btn.value != 'back' && btn.classList != 'btn-operator') {
//             if (secondNum.includes('.') && btn.value == '.') {
//                 btn.disabled = true;
//             } else {
//                 secondNum += btn.value;
//                 input.value = secondNum;
//             }
//             btn.disabled = false;
//         } else if (btn.value === '=' && firstNum != '' && secondNum != '' && operator != '') {
//             findAnswer();
//             firstNum = '';
//             secondNum = '';
//             operator = '';
//             prevAnswer = total;
//         } else if (isNaN(Number(btn.value)) && operator != '' && btn.value != '.' && btn.value != '%' && btn.value != 'back') {
//             findAnswer();
//             secondNum = '';
//             operator = btn.value
//             console.log(firstNum);
//         } else if (btn.value === 'back') {
//             if (firstNum.length > 0 && operator == '' && secondNum.length == 0) {
//                 input.value = input.value.substring(0, input.value.length - 1);
//                 firstNum = input.value;
//             } else if (firstNum.length > 0 && operator != '' && secondNum.length == 0) {
//                 operator = '';
//                 input.value = firstNum;
//             } else if (firstNum.length > 0 && operator != '' && secondNum.length > 0) {
//                 input.value = input.value.substring(0, input.value.length - 1);
//                 secondNum = input.value;
//                 if (secondNum.length == 0) {
//                     input.value = operator;
//                 }
//             } else {
//                 hint.style.display = 'block';
//                 setTimeout(function () { hint.style.display = 'none' }, 2000);
//                 firstNum = '';
//                 secondNum = '';
//                 operator = '';
//                 input.value = '';
//             }
//         } else {
//             hint.style.display = 'block';
//             setTimeout(function () { hint.style.display = 'none' }, 2000);
//             firstNum = '';
//             secondNum = '';
//             operator = '';
//             input.value = '';
//         }
//         if (btn.value === 'C' || btn.value === 'c') {
//             firstNum = '';
//             secondNum = '';
//             operator = '';
//             input.value = '';
//         }
//         console.log('The first number is: ' + firstNum);
//         console.log('The second number is: ' + secondNum);
//         console.log('The operator number is: ' + operator);
//         console.log('The equation is: ' + total);
//     });
// });

// function findAnswer() {
//     switch (true) {
//         case operator === '+':
//             total = Number(firstNum) + Number(secondNum);
//             firstNum = total.toString();
//             input.value = total.toString();
//             break;
//         case operator === '-':
//             total = Number(firstNum) - Number(secondNum);
//             prevAnswer = total.toString();
//             input.value = total;
//             break;
//         case operator === 'x':
//             if (firstNum.includes('%')) {
//                 total = (Number(firstNum.substring(0, firstNum.length - 1) / 100)) * Number(secondNum);
//                 if (total.toString().includes('.')) {
//                     total.toFixed(2);
//                     prevAnswer = total.toString();
//                     input.value = total.toString();
//                 } else {
//                     prevAnswer = total.toString();
//                     input.value = total.toString();
//                 }
//             } else if (secondNum.includes('%')) {
//                 total = Number(firstNum) * (Number(secondNum.substring(0, secondNum.length - 1) / 100));
//                 if (total.toString().includes('.')) {
//                     total.toFixed(2);
//                     prevAnswer = total.toString();
//                     input.value = total.toString();
//                 } else {
//                     prevAnswer = total.toString();
//                     input.value = total.toString();
//                 }
//             } else {
//                 total = Number(firstNum) * Number(secondNum);
//                 prevAnswer = total.toString();
//                 input.value = total.toString();
//             }
//             break;
//         case operator === '/':
//             if (Number(secondNum) == 0) {
//                 hint.style.display = 'block';
//                 setTimeout(function () { hint.style.display = 'none' }, 2000);
//                 input.value = '';
//             } else {
//                 total = Number(firstNum) / Number(secondNum);
//                 if (total.toString().includes('.')) {
//                     Number(total).toFixed(2);
//                     prevAnswer = Number(total).toFixed(2);
//                     input.value = Number(total).toFixed(2);
//                 } else {
//                     prevAnswer = total.toString();
//                     input.value = total.toString();
//                 }
//             }
//             break;
//         default:
//             total = 0;
//             input.value = total;
//     }
// }

