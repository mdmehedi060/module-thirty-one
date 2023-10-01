const numbers = [1, 2, 3, 4, 5, 6];
const plyers = [45, 65, 55, 75, 85];
// const selected = plyers.filter(p => p > 90);
// console.log(selected);
const selected = plyers.filter(p => p % 2 === 1);
console.log(selected);