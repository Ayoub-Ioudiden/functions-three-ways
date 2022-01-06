//function declaration
function add(number1, number2) {
    return number1 + number2;
}

add(5, 6); // 11



//function expression

const add = function (number1, number2) {
    return number1 + number2;
};

add(5, 6); // 11


//arrow function

const add = (number1, number2) => {
    return number1 + number2;
};
add(5, 6); // 11