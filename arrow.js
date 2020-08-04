/*amra age function declare kora shikhechi. ekhon dekhbo kivabe variable er maddhome function declare kora jai.
ar kivabe aro sohoje akta function ke arrrow function er  maddhome decalare kora jai.*/



// function doubleIt(num){
//     return num*2;
// }

// const result = doubleIt(5);
// console.log(result);

/*
variable er moddhe function declare kora.

const doubleIt = function(num){
    return num * 2;
}

const result = doubleIt(4);
console.log(result); */

const doubleIt = (num) => num *2;
// const result = doubleIt(40);
// console.log(result);

// const sum = (x, y) => x + y;
// const result = sum(40, 50);
// console.log(result);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doMath(7, 5);
console.log(result);