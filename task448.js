/* 📌 Задача 448. Для корректной Unicode-строки поменяй регистр латинских букв; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.replace(/[a-z]/gi, c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase());
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"aBBA 12 #<A>","metric":[["a",1],["B",2],["A",2],[" ",2],["1",1],["2",1],["#",1],["<",1],[">",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀AA😀 ([X])","metric":[["😀",2],["A",2],[" ",1],["(",1],["[",1],["X",1],["]",1],[")",1]]}
