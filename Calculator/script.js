let outputRow1 = document.querySelector(".output-row1");
let outputRow2 = document.querySelector(".output-row2");

let operand1 = NaN;
let operand2 = NaN;
let operator = "";
let history = [];
let operandinput = false;
let result = NaN;

clear = () => {
    outputRow1.innerHTML = "";
    outputRow2.innerHTML = 0;
    history = [];
    operand1 = NaN;
    operand2 = NaN;
    operandinput = false;
    result = NaN;
};

clear();

clearStep = () => {
    outputRow2.innerHTML = 0;
};

removelastchar = () => {
    let str = outputRow2.innerHTML;
    if (str.length > 1) {
        str = str.slice(0, -1);
        setTimeout(() => {
            outputRow2.innerHTML = str;
        }, 1);
    } else {
        outputRow2.innerHTML = 0;
    }
};

changeSign = () => {
    if (outputRow2.innerHTML == 0) {
        outputRow2.innerHTML = 0;
    } else if (outputRow2.innerHTML > 0) {
        outputRow2.innerHTML = -outputRow2.innerHTML;
    } else {
        outputRow2.innerHTML = Math.abs(outputRow2.innerHTML);
    }
};

refreshOutput = () => {
    outputRow1.innerHTML = "";
    history.forEach(row => {
        outputRow1.innerHTML += row + "<br>";
    });
    outputRow1.scrollTop = outputRow1.scrollHeight;
};

input = (button) => {
    if (operandinput && !isNaN(button)) {
        outputRow2.innerHTML = button;
        operandinput = false;
        return;
    }

    if (!isNaN(button)) {
        if (outputRow2.innerHTML == 0 && outputRow2.innerHTML.indexOf('.') == -1) {
            outputRow2.innerHTML = button;
        } else {
            outputRow2.innerHTML += button;
        }
    } else if (button === '.') {
        if (outputRow2.innerHTML == 0) {
            outputRow2.innerHTML = '0' + button;
        } else if (outputRow2.innerHTML.indexOf('.') == -1) {
            outputRow2.innerHTML += button;
        }
    } else if (button === '+' || button === '-' || button === '/' || button === '*') {
        operand1 = parseFloat(outputRow2.innerHTML);
        operator = button;
        history.push(outputRow2.innerHTML + " " + button);
        refreshOutput();
        operandinput = true;
    } else if (button === 'sqrt') {
        operand1 = parseFloat(outputRow2.innerHTML);
        result = Math.sqrt(operand1);
        outputRow2.innerHTML = result;
        history.push('√' + operand1 + " = " + result);
        refreshOutput();
        operandinput = true;
    } else if (button === 'square') {
        operand1 = parseFloat(outputRow2.innerHTML);
        result = Math.pow(operand1, 2);
        outputRow2.innerHTML = result;
        history.push(operand1 + "^2 = " + result);
        refreshOutput();
        operandinput = true;
    } else if (button === 'onebyx') {
        operand1 = parseFloat(outputRow2.innerHTML);
        result = 1 / operand1;
        outputRow2.innerHTML = result;
        history.push("1/" + operand1 + " = " + result);
        refreshOutput();
        operandinput = true;
    } else if (button === '%') {
        operand2 = parseFloat(outputRow2.innerHTML);
        result = operand1 * (operand2 / 100);
        outputRow2.innerHTML = result;
        history.push(operand1 + " % " + operand2 + " = " + result);
        refreshOutput();
        operandinput = true;
    } else if (button === '=') {
        operand2 = parseFloat(outputRow2.innerHTML);
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                if (operand2 === 0) {
                    result = "Error: Division by zero!";
                } else {
                    result = operand1 / operand2;
                }
                break;
            default:
                result = NaN;
        }
        outputRow2.innerHTML = result;
        history.push(operand1 + " " + operator + " " + operand2 + " = " + result);
        refreshOutput();
        operandinput = true;
    }
};

c.addEventListener("click", clear);
ce.addEventListener("click", clearStep);
backspace.addEventListener("click", removelastchar);
zero.addEventListener("click", () => {
  input(0);
});
one.addEventListener("click", () => {
  input(1);
});
two.addEventListener("click", () => {
  input(2);
});
three.addEventListener("click", () => {
  input(3);
});
four.addEventListener("click", () => {
  input(4);
});
five.addEventListener("click", () => {
  input(5);
});
six.addEventListener("click", () => {
  input(6);
});
seven.addEventListener("click", () => {
  input(7);
});
eight.addEventListener("click", () => {
  input(8);
});
nine.addEventListener("click", () => {
  input(9);
});
dot.addEventListener("click", () => {
  input(".");
});
plusorminus.addEventListener("click", changeSign);
plus.addEventListener("click", () => {
  input('+');
});
minus.addEventListener("click", () => {
  input('-');
});
multiply.addEventListener("click", () => {
  input('*');
});
devide.addEventListener("click", () => {
  input('/');
});
squareroot.addEventListener("click", () => {
  input('sqrt');
});
square.addEventListener("click", () => {
  input('square');
});
onebyx.addEventListener("click", () => {
  input('onebyx');
});
percentage.addEventListener("click", () => {
  input('%');
});
equals.addEventListener("click", () => {
  input("=");
});
