/* 📌 Задача 437. Для корректной Unicode-строки выполни percent-кодирование компонента URI; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return encodeURIComponent(text);
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba%2012%20%23%3Ca%3E","metric":[["A",1],["b",2],["a",2],["%",5],["2",4],["0",2],["1",1],["3",3],["C",1],["E",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"%F0%9F%98%80aa%F0%9F%98%80%20(%5Bx%5D)","metric":[["%",11],["F",4],["0",5],["9",4],["8",4],["a",2],["2",1],["(",1],["5",2],["B",1],["x",1],["D",1],[")",1]]}
