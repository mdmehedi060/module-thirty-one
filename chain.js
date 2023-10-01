// data access
const data = [{ id: 1, name: 'abul', adress: 'kochu khet' }];
// console.log(data[0].adress);

const Product = {
  count: 5000,
  data: [
    { id: 1, name: 'lenovo laptop', price: 65000 },
    { id: 1, name: 'hp laptop', price: 55000 },
  ]
}
// seconed product price
// console.log(Product.data[1].price);

const user = {
  id: 5001,
  name: 'shoriful raj',
  adress: {
    street: {
      first: '54/1 uttar badda',
      seconed: 'japan para',
      thired:'no dorai',
    },
    city:'Dhaka',
  }
}

// console.log(user.adress.street?.seconed);

const user2 = {
  id: 5002,
  name: 'shoriful raj',
  adress: {
    city: 'Dhaka',
    country: 'Bangladesh',
  }
}

// console.log(user2.adress.street?.country);