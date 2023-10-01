const numbers = [2, 3, 4, 5, 6];
const doubled = numbers.map(n => n * 2);
// console.log(doubled);
const fiveBonus = numbers.map(n => n + 5);
// console.log(fiveBonus);
const huves = numbers.map(n => n /2);
// console.log(huves);


const friends = ['tom', 'dom', 'hom', 'pom'];
const lengths = friends.map(frnd => friends.length);
console.log(lengths);
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);