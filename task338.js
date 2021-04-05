/* 📌 Задача 338. Для корректной Unicode-строки преврати слова из латинских букв в kebab-case; затем построй частоты символов в порядке первого появления. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.match(/[a-z]+/gi)?.map(x => x.toLowerCase()).join('-') ?? '';
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...counts];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"abba-a","metric":[["a",3],["b",2],["-",1]]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"aa-x","metric":[["a",2],["-",1],["x",1]]}
