/* 📌 Задача 316. Для корректной Unicode-строки разверни порядок слов, разделённых пробелами; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.trim().split(/\s+/u).filter(Boolean).reverse().join(' ');
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"#<a> 12 Abba","metric":[["#",1],["<",1],["a",2],[">",1],[" ",2],["1",1],["2",1],["A",1],["b",2]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"([x]) 😀aa😀","metric":[["(",1],["[",1],["x",1],["]",1],[")",1],[" ",1],["😀",2],["a",2]]}
