// // task 1   

let btn = document.querySelector('button')

function creatingCalculator() {

    let number1 = +prompt('Enter first number: ')
    let operator = prompt('Enter operator ( either +, -, * or / ): ')
    let number2 = +prompt('Enter second number: ')

    if (operator == '+') {
        alert(number1 + number2)
    }
    else if (operator == '-') {
        alert(number1 + number2)
    }
    else if (operator == '*') {
        alert(number1 + number2)
    }
    else {
        alert(number1 + number2)
    }
}

btn.onclick = () => {
    creatingCalculator()
}

// task 2

let button = document.querySelector('#btn')

function findingPercent() {
    let num = +prompt('общее кол-во')
    let num1 = +prompt('найти из')
    let answer = (num1 / num) * 100
    alert(answer);
}

button.onclick = () => {
    findingPercent()
}