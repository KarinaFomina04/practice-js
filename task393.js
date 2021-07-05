/* 📌 Задача 393. Для корректной Unicode-строки преврати строку в последовательность шестнадцатеричных кодовых точек через пробел; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].map(c => c.codePointAt(0).toString(16)).join(' ');
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"41 62 62 61 20 31 32 20 23 3c 61 3e","metric":[["4",1],["1",4],[" ",11],["6",4],["2",6],["0",2],["3",5],["c",1],["e",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"1f600 61 61 1f600 20 28 5b 78 5d 29","metric":[["1",4],["f",2],["6",4],["0",5],[" ",9],["2",3],["8",2],["5",2],["b",1],["7",1],["d",1],["9",1]]}
