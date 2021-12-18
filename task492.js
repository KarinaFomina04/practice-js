/* 📌 Задача 492. Для корректной Unicode-строки преврати латинские буквы в их номера в алфавите, остальные символы сохрани; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].map(c => /[a-z]/i.test(c) ? String(c.toLowerCase().charCodeAt(0) - 96) : c).join('');
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"1221 12 #<1>","metric":[["1",4],["2",3],[" ",2],["#",1],["<",1],[">",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀11😀 ([24])","metric":[["😀",2],["1",2],[" ",1],["(",1],["[",1],["2",1],["4",1],["]",1],[")",1]]}
