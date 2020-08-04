// 3dots (...) hocche ekta spread operator jar kaj array er element guloke mix up kora.//
// amra kisu example dekhbo??

// javascript er old way by using concat//

const ages = [20, 30, 40, 50];
const ages2 = [87, 45, 86, 90];

// const allAges = ages.concat(ages2).concat([5]);
// console.log(allAges); 

// new ways by using 3 dots.//

const allAges = [...ages, ...ages2, 5];
console.log(allAges); 

// array er moddhe max kora

const takaPoisha = [458, 9890,567];
const maximum = Math.max(...takaPoisha);
console.log(maximum);