/* 📌 Задача 459. Для корректной Unicode-строки отсортируй символы по кодовым точкам Unicode; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].sort((a, b) => a.codePointAt(0) - b.codePointAt(0)).join('');
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"  #12<>Aaabb","metric":[[" ",2],["#",1],["1",1],["2",1],["<",1],[">",1],["A",1],["a",2],["b",2]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":" ()[]aax😀😀","metric":[[" ",1],["(",1],[")",1],["[",1],["]",1],["a",2],["x",1],["😀",2]]}
