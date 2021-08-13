/* 📌 Задача 415. Для корректной Unicode-строки сотри символ и предыдущий оставшийся символ для каждого знака #; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const stack = []; for (const c of text) { if (c === '#') stack.pop(); else stack.push(c); } return stack.join('');
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba 12<a>","metric":[["A",1],["b",2],["a",2],[" ",1],["1",1],["2",1],["<",1],[">",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":[["😀",2],["a",2],[" ",1],["(",1],["[",1],["x",1],["]",1],[")",1]]}
