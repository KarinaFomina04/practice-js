/* 📌 Задача 326. Для корректной Unicode-строки разверни символы внутри каждого слова, сохраняя пробелы; затем проверь, является ли результат палиндромом с учётом всех символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Junior. */

function encode(text) {
  return text.replace(/\S+/gu, word => [...word].reverse().join(''));
}

function measure(text) {
  return text === [...text].reverse().join('');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"abbA 21 >a<#","metric":false}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":true}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 )]x[(","metric":false}
