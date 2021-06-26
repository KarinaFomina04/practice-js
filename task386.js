/* 📌 Задача 386. Для корректной Unicode-строки экранируй пять специальных символов HTML: амперсанд, угловые скобки и обе кавычки; затем найди самое длинное слово между пробелами, при равенстве выбери первое. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const escapes = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
  return text.replace(/[&<>"']/g, c => escapes[c]);
}

function measure(text) {
  return text.split(/\s+/u).reduce((best, word) => [...word].length > [...best].length ? word : best, '');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba 12 #&lt;a&gt;","metric":"#&lt;a&gt;"}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":""}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":"([x])"}
