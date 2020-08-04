const name = "Rahim Mia";
// name = "kuddus"
// const means not changeable. we cannot change the property.
console.log(name);

/* #let is brother to var for declaration.it is changeable.
# let can be said scope variable which means simply leak proof.
# when we will declare in curly bracket by using let it only works within the bracket.*/

let profession = "doctor";
 profession = "web developer";
// console log will not show doctor.
 console.log(profession);


 let sum = 0;
 for (let i = 0; i < 10; i++) {
     sum = sum+i;
      
 }
 console.log(i);
 // it will be error
 