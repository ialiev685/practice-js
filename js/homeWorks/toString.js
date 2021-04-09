console.log('---TO STRING---');
let value = 0;

// число к строке

// 1-й способ
let toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(`тип данных ${value} через конструктор String():`, typeof toString);

// 2-й  способ
toString = value + '';
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип данных ${value} через конкатенацию:`, typeof toString);

value = 1;
// 1-й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(`тип данных ${value} через конструктор String():`, typeof toString);

// 2-й  способ
toString = value + '';
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип данных ${value} через конкатенацию:`, typeof toString);

// бесконечность к строке

value = Infinity;
// 1-й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(`тип данных ${value} через конструктор String():`, typeof toString);

// 2-й  способ
toString = value + '';
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип данных ${value} через конкатенацию:`, typeof toString);

// Nan к строке

value = NaN;
// 1-й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(`тип данных ${value} через конструктор String():`, typeof toString);

// 2-й  способ
toString = value + '';
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип данных ${value} через конкатенацию:`, typeof toString);

// BOOLEAN(логическое) к строке

value = true;
// 1-й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(`тип данных ${value} через конструктор String():`, typeof toString);

// 2-й  способ
toString = value + '';
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип данных ${value} через конкатенацию:`, typeof toString);

value = false;
// 1-й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(`тип данных ${value} через конструктор String():`, typeof toString);

// 2-й  способ
toString = value + '';
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип данных ${value} через конкатенацию:`, typeof toString);

// undefined

value = undefined;
// 1-й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(`тип данных ${value} через конструктор String()`, typeof toString);

// 2-й  способ
toString = value + '';
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип данных ${value} через конкатенацию:`, typeof toString);

// null

value = null;
// 1-й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(`тип данных ${value} через конструктор String():`, typeof toString);

// 2-й  способ
toString = value + '';
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип данных ${value} через конкатенацию:`, typeof toString);
