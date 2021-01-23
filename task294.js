/* 📌 Задача 294. Для корректной Unicode-строки оставь первые вхождения символов Unicode; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...new Set(text)].join('');
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Aba 12#<>","metric":[["A",1],["b",1],["a",1],[" ",1],["1",1],["2",1],["#",1],["<",1],[">",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀a ([x])","metric":[["😀",1],["a",1],[" ",1],["(",1],["[",1],["x",1],["]",1],[")",1]]}
