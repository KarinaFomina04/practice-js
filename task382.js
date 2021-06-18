/* 📌 Задача 382. Для корректной Unicode-строки экранируй пять специальных символов HTML: амперсанд, угловые скобки и обе кавычки; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const escapes = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
  return text.replace(/[&<>"']/g, c => escapes[c]);
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba 12 #&lt;a&gt;","metric":[["A",1],["b",2],["a",2],[" ",2],["1",1],["2",1],["#",1],["&",2],["l",1],["t",2],[";",2],["g",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":[["😀",2],["a",2],[" ",1],["(",1],["[",1],["x",1],["]",1],[")",1]]}
