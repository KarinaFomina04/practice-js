/* 📌 Задача 329. Для корректной Unicode-строки разверни символы внутри каждого слова, сохраняя пробелы; затем найди сумму ASCII-цифр в результате. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Junior. */

function encode(text) {
  return text.replace(/\S+/gu, word => [...word].reverse().join(''));
}

function measure(text) {
  return [...text].reduce((sum, c) => sum + (/\d/.test(c) ? Number(c) : 0), 0);
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"abbA 21 >a<#","metric":3}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 )]x[(","metric":0}
