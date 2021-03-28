// создание
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

// доступ
console.log(hotel.name);
console.log(hotel['name']);

hotel.name = 'saraya resort and spa';

console.log(hotel.name);

// удаление
hotel.adress = 'Egypt';
hotel.manager = 'Mahmud';

console.log(hotel);

delete hotel.manager;
console.log(hotel);

// короткие свойства
let name = 'Silva Beach';
let stars = 4;
const es6Hotel = {
  name,
  stars,
  capacity: 200,
};
const es5Hotel = {
  name: name,
  stars: stars,
  capacity: 200,
};

console.log('es5:', es5Hotel);
console.log('es6:', es6Hotel);

// вычисляемые свойства
const key = 'person';
const getKey = function () {
  return 'age';
};

const fruit = {
  [key]: 'kiwi',
  [getKey()]: '1 month',
};

console.log('фрукт:', fruit);

// методы обьекта

const hotelTitanic = {
  greetES5: function () {
    console.log('es5: welcome');
  },

  greetES6() {
    console.log('es6: welcome');
  },
};

console.log(hotelTitanic.greetES5);
console.log(hotelTitanic.greetES6);

hotelTitanic.greetAdd = function () {
  console.log('Еще раз привет!');
};

hotelTitanic.greetAdd();
console.log(hotelTitanic);

// Доступ к объекту через this

let HotelTurkish = {
  name: 'Titanic',
  capacity: 396,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

HotelTurkish.showName();
HotelTurkish.changeCapacity(598);
console.log(HotelTurkish.capacity);
console.log(HotelTurkish);

// перебор обьекта

for (const key in hotel) {
  console.log('key:', key);
}
for (const key in hotel) {
  console.log('key:', hotel[key]);
}

const keys = Object.keys(hotel);
const values = Object.values(hotel);
const entries = Object.entries(hotel);
console.log('ключи обьекта:', keys);
console.log('значения обьекта:', values);
console.log('массивы в массиве:', entries);

for (const key of keys) {
  console.log('value:', hotel[key]);
}

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(`${key} : ${value}`);
}

const goods = {
  apple: 7,
  orange: 10,
  kiwi: 23,
  banana: 9,
};

let total = 0;
for (const value in goods) {
  total += goods[value];
}
console.log('через for..in', total);

total = 0;
const goodsSum = Object.values(goods);
for (const value of goodsSum) {
  total += value;
}

console.log('через for..of', total);
