const numbers = [5, 8, 9, 6, 55, 66];
const total = numbers.reduce((privious, current) => privious + current, 0);
// console.log(total);

const sum = numbers.reduce((p, c) =>p + c, 0);
console.log(sum);