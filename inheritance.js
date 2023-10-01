class Vehical{
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log('gari chole na chole na re');
  }
}

class Bus extends Vehical{
  constructor(name, price, seat, ticketprice) {
    super(name, price);
    this.seat = seat;
    this.ticketprice = ticketprice;
  }
}

class Truck extends Vehical{
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}