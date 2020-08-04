/*function add(num1, num2){
    return num1 + num2;
}

const total = add(15, 17);
console.log(total);*/

/* now the main magic begins!! some times when we don't  put the value of the parameter the codes become error.
there are three ways we can solve the problem. we can call it also backup ase mama.*/

// first ones

function add(num1, num2){
    num2 = num2 || 5;
    return num1 + num2;
}

const total = add(15);
console.log(total);

// latest ecma ones

function added(num1, num2 = 10){
    return num1 + num2;
}

const sum = added(20);
console.log(sum);
