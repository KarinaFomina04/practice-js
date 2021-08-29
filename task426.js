/* 📌 Задача 426. Для корректной Unicode-строки замени каждую ASCII-цифру её английским названием в квадратных скобках; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const names = ['zero','one','two','three','four','five','six','seven','eight','nine']; return text.replace(/\d/g, c => '[' + names[Number(c)] + ']');
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba [one][two] #<a>","metric":[["A",1],["b",2],["a",2],[" ",2],["[",2],["o",2],["n",1],["e",1],["]",2],["t",1],["w",1],["#",1],["<",1],[">",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":[["😀",2],["a",2],[" ",1],["(",1],["[",1],["x",1],["]",1],[")",1]]}
