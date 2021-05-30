/* 📌 Задача 371. Для корректной Unicode-строки замени серии символов парой символ:длина, разделяя пары вертикальной чертой; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text], runs = []; for (let i = 0; i < chars.length;) { let j = i + 1; while (chars[j] === chars[i]) j++; runs.push(chars[i] + ':' + (j - i)); i = j; } return runs.join('|');
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"A:1|b:2|a:1| :1|1:1|2:1| :1|#:1|<:1|a:1|>:1","metric":[["A",1],[":",11],["1",11],["|",10],["b",1],["2",2],["a",2],[" ",2],["#",1],["<",1],[">",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀:1|a:2|😀:1| :1|(:1|[:1|x:1|]:1|):1","metric":[["😀",2],[":",9],["1",8],["|",8],["a",1],["2",1],[" ",1],["(",1],["[",1],["x",1],["]",1],[")",1]]}
