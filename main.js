/* Create a simple calculator app that uses the buttons from the html
that performs the basic operations of addition, subtraction, multiplication, and division.
*/

let firstNumber;
let secondNumber;
let operator;
let displayValue = 50;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

function updateDisplay() {
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = 0;
    updateDisplay();
}

// add event listener to the clear button
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDisplay);

// add event listeners to the buttons in index.html
const buttonsContainer = document.querySelector('.buttons');
const allButtons = buttonsContainer.querySelectorAll("button");

allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (displayValue === 0) {
                displayValue = button.textContent;
            } else {
            displayValue += button.textContent;
            }
            updateDisplay();
        } else if (button.classList.contains('operator')) {
            operator = button.textContent;
            firstNumber = displayValue;
            displayValue = 0;
            updateDisplay();
        } else if (button.classList.contains('equals')) {
            secondNumber = displayValue;
            displayValue = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
            updateDisplay();
        }
    });
})

console.log(buttons)



