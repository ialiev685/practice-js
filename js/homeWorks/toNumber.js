console.log('---TO NUMBER---');
let value = 'bla bla bla';

// любое строчное значение к ЧИСЛУ

// 1-й способ
let toNumber = Number(value);
console.log(`${value} через конструктор Number()`, toNumber);
console.log(`тип данных ${value} через конструктор Number():`, typeof toNumber);

// 2-й  способ
toNumber = +value;
console.log(`${value} через унарный +`, toNumber);
console.log(`тип данных ${value} через унарный +:`, typeof toNumber);

// строчное число к чуислу

value = '123';

// 1-й способ
toNumber = Number(value);
console.log(`${value} через конструктор Number()`, toNumber);
console.log(`тип данных ${value} через конструктор Number():`, typeof toNumber);

// 2-й  способ
toNumber = +value;
console.log(`${value} через унарный +`, toNumber);
console.log(`тип данных ${value} через унарный +:`, typeof toNumber);

// пустая строка к числу

value = '';

// 1-й способ
toNumber = Number(value);
console.log(`пустая строка ${value} через конструктор Number()`, toNumber);
console.log(
  `тип данных пустая строка ${value} через конструктор Number():`,
  typeof toNumber,
);

// 2-й  способ
toNumber = +value;
console.log(`пустая строка ${value} через унарный +`, toNumber);
console.log(
  `тип данных пустая строка ${value} через унарный +:`,
  typeof toNumber,
);

// строка с пробелом(не пустая) к числу

value = ' ';

// 1-й способ
toNumber = Number(value);
console.log(`строка с пробелом${value} через конструктор Number()`, toNumber);
console.log(
  `тип данных строка с пробелом${value} через конструктор Number():`,
  typeof toNumber,
);

// 2-й  способ
toNumber = +value;
console.log(`строка с пробелом ${value} через унарный +`, toNumber);
console.log(
  `тип данных строка с пробелом${value} через унарный +:`,
  typeof toNumber,
);

// булевое значение(логическое) к числу

value = true;

// 1-й способ
toNumber = Number(value);
console.log(`${value} через конструктор Number()`, toNumber);
console.log(`тип данных ${value} через конструктор Number():`, typeof toNumber);

// 2-й  способ
toNumber = +value;
console.log(`${value} через унарный +`, toNumber);
console.log(`тип данных ${value} через унарный +:`, typeof toNumber);

value = false;

// 1-й способ
toNumber = Number(value);
console.log(`${value} через конструктор Number()`, toNumber);
console.log(`тип данных ${value} через конструктор Number():`, typeof toNumber);

// 2-й  способ
toNumber = +value;
console.log(`${value} через унарный +`, toNumber);
console.log(`тип данных ${value} через унарный +:`, typeof toNumber);

// undefined к числу

value = undefined;

// 1-й способ
toNumber = Number(value);
console.log(`${value} через конструктор Number()`, toNumber);
console.log(`тип данных ${value} через конструктор Number():`, typeof toNumber);

// 2-й  способ
toNumber = +value;
console.log(`${value} через унарный +`, toNumber);
console.log(`тип данных ${value} через унарный +:`, typeof toNumber);

// null к числу

value = null;

// 1-й способ
toNumber = Number(value);
console.log(`${value} через конструктор Number()`, toNumber);
console.log(`тип данных ${value} через конструктор Number():`, typeof toNumber);

// 2-й  способ
toNumber = +value;
console.log(`${value} через унарный +`, toNumber);
console.log(`тип данных ${value} через унарный +:`, typeof toNumber);
