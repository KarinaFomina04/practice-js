/* 📌 Задача 398. Для корректной Unicode-строки преврати строку в последовательность шестнадцатеричных кодовых точек через пробел; затем вычисли 32-битный беззнаковый полиномиальный хеш по кодовым точкам с основанием 31. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].map(c => c.codePointAt(0).toString(16)).join(' ');
}

function measure(text) {
  let hash = 0; for (const c of text) hash = (Math.imul(hash, 31) + c.codePointAt(0)) >>> 0; return hash;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"41 62 62 61 20 31 32 20 23 3c 61 3e","metric":2174765123}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"1f600 61 61 1f600 20 28 5b 78 5d 29","metric":3579771606}
