/* 📌 Задача 359. Для корректной Unicode-строки выполни ROT13 для латинских букв с сохранением регистра; затем проверь, является ли результат палиндромом с учётом всех символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Junior. */

function encode(text) {
  return text.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() <= 'm' ? 13 : -13)));
}

function measure(text) {
  return text === [...text].reverse().join('');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Noon 12 #<n>","metric":false}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":true}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀nn😀 ([k])","metric":false}
