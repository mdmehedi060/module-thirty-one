const products = [
  { id: 1, name: 'lanovo', price: 65000 },
  { id: 2, name: 'hp', price: 48000 },
  { id: 3, name: 'dell', price: 45000 },
  { id: 4, name: 'mack', price: 165000 },
]

// maps
const names = products.map(product => product.name);
// console.log(names);

// forEach
// products.forEach(p => console.log(p.id))

// filter
const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);

// find
const affrodable = products.find(p => p.price < 50000);
// console.log(affrodable);

// reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);