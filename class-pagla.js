const products = [
  { id: 1, name: 'lanovo', price: 65000 },
  { id: 2, name: 'hp', price: 48000 },
  { id: 3, name: 'dell', price: 45000 },
  { id: 4, name: 'mack', price: 165000 },
]

// hs some properties mathod

class Products{
   country = 'Bangladesh';
  constructor(name) {
    this.name = name;
  }
  
  speak(talk) { 
  console.log(`taking about ${talk}`);
}
}
const lanovo = new Products('le le lanovo')
// console.log(lanovo);
// lanovo.speak('toi aba ke')


class Teacher{
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
}
  lecture() {
    console.log('sir is teaching math');
  }
}

const tapan = new Teacher('Tap0n sir', 'Physics');
console.log(tapan);