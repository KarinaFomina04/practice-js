/* 📌 Задача 403. Для корректной Unicode-строки переставь символы: сначала чётные индексы, затем нечётные; затем проверь, является ли результат палиндромом с учётом всех символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text]; return chars.filter((_, i) => i % 2 === 0).concat(chars.filter((_, i) => i % 2)).join('');
}

function measure(text) {
  return text === [...text].reverse().join('');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Ab 2#aba1 <>","metric":false}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":true}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀a []a😀(x)","metric":false}
