// function expession

const myFunc = function (a = 0, b = 0) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b);
  let result;
  isNaN(a) || isNaN(b) ? (result = `error`) : (result = a + b);
  return result;
};

let result = myFunc('двенадцать', 'двадцать');
console.log(result);

//  result = myFunc('3.12', 4.12);
// console.log(result);

// fuction delaration

result = myFunc2(4, 2);

function myFunc2(x, y) {
  return x * y;
}
console.log(result);

// fuction delaration

const myFunc3 = (x, y) => {
  return x ** y;
};

result = myFunc3(5, 5);
console.log(result);
