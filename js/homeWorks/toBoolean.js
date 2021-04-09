console.log('---TO BOOLEAN---');

let value = 'bla bla bla';

// любое строчное значение к boolean

// 1-й способ
let toBoolean = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value} через конструктор Boolean():`,
  typeof toBoolean,
);

// 2-й  способ
toBoolean = !!value;
console.log(`${value} через !!:`, toBoolean);
console.log(`тип данных ${value} через !!:`, typeof toBoolean);

// строчное число к boolean

value = '123';

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value} через конструктор Boolean():`,
  typeof toBoolean,
);

// 2-й  способ
toBoolean = !!value;
console.log(`${value} через !!:`, toBoolean);
console.log(`тип данных ${value} через !!:`, typeof toBoolean);

// пустая строка к boolean

value = '';

// 1-й способ
toBoolean = Boolean(value);
console.log(`пустая строка ${value} через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных пустая строка ${value} через конструктор Boolean():`,
  typeof toBoolean,
);

// 2-й  способ
toBoolean = !!value;
console.log(`пустая строка ${value} через !!:`, toBoolean);
console.log(`тип данных пустая строка ${value} через !!:`, typeof toBoolean);

// строка c пробелом к boolean

value = ' ';

// 1-й способ
toBoolean = Boolean(value);
console.log(
  `строка с пробелом ${value} через конструктор Boolean():`,
  toBoolean,
);
console.log(
  `тип данных строка с пробелом${value} через конструктор Boolean():`,
  typeof toBoolean,
);

// 2-й  способ
toBoolean = !!value;
console.log(`строка с пробелом${value} через !!:`, toBoolean);
console.log(`тип данных строка с пробелом${value} через !!:`, typeof toBoolean);

// число 1 к boolean

value = 1;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value} через конструктор Boolean():`,
  typeof toBoolean,
);

// 2-й  способ
toBoolean = !!value;
console.log(`${value} через !!:`, toBoolean);
console.log(`тип данных ${value} через !!:`, typeof toBoolean);

// число 0 к boolean

value = 0;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value} через конструктор Boolean():`,
  typeof toBoolean,
);

// 2-й  способ
toBoolean = !!value;
console.log(`${value} через !!:`, toBoolean);
console.log(`тип данных ${value} через !!:`, typeof toBoolean);

// undefined к boolean

value = undefined;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value} через конструктор Boolean():`,
  typeof toBoolean,
);

// 2-й  способ
toBoolean = !!value;
console.log(`${value} через !!:`, toBoolean);
console.log(`тип данных ${value} через !!:`, typeof toBoolean);

// NaN к boolean

value = NaN;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value} через конструктор Boolean():`,
  typeof toBoolean,
);

// 2-й  способ
toBoolean = !!value;
console.log(`${value} через !!:`, toBoolean);
console.log(`тип данных ${value} через !!:`, typeof toBoolean);

// null к boolean

value = null;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value} через конструктор Boolean():`,
  typeof toBoolean,
);

// 2-й  способ
toBoolean = !!value;
console.log(`${value} через !!:`, toBoolean);
console.log(`тип данных ${value} через !!:`, typeof toBoolean);
