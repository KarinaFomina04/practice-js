/* 📌 Задача 351. Для корректной Unicode-строки преврати слова из латинских букв в camelCase; затем найди сумму ASCII-цифр в результате. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Junior. */

function encode(text) {
  const words = text.match(/[a-z]+/gi) ?? []; return words.map((x, i) => i ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase()).join('');
}

function measure(text) {
  return [...text].reduce((sum, c) => sum + (/\d/.test(c) ? Number(c) : 0), 0);
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"abbaA","metric":0}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"aaX","metric":0}
