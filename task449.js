/* 📌 Задача 449. Для корректной Unicode-строки поменяй регистр латинских букв; затем найди длину самой длинной серии одинаковых символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.replace(/[a-z]/gi, c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase());
}

function measure(text) {
  let best = 0, run = 0, previous; for (const c of text) { run = c === previous ? run + 1 : 1; previous = c; best = Math.max(best, run); } return best;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"aBBA 12 #<A>","metric":2}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀AA😀 ([X])","metric":2}
