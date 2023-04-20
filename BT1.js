function calculator(number1, number2, operator) {
    var result;
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    else {
        throw new Error("Đây không thuộc operator đang dùng");
    }
    return result;
}
try {
    throw new Error(calculator(3, 9, '/'));
    throw new Error(calculator(3, 9, '%'));
}
catch (e) {
    console.log(e.message);
}
