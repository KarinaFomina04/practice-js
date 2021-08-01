/* 📌 Задача 408. Для корректной Unicode-строки переставь символы: сначала чётные индексы, затем нечётные; затем найди самое длинное слово между пробелами, при равенстве выбери первое. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text]; return chars.filter((_, i) => i % 2 === 0).concat(chars.filter((_, i) => i % 2)).join('');
}

function measure(text) {
  return text.split(/\s+/u).reduce((best, word) => [...word].length > [...best].length ? word : best, '');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Ab 2#aba1 <>","metric":"2#aba1"}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":""}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀a []a😀(x)","metric":"[]a😀(x)"}
