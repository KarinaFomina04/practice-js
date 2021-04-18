/* 📌 Задача 345. Для корректной Unicode-строки преврати слова из латинских букв в kebab-case; затем найди длину наибольшей подстроки без повторяющихся символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.match(/[a-z]+/gi)?.map(x => x.toLowerCase()).join('-') ?? '';
}

function measure(text) {
  const last = new Map(); let left = 0, best = 0; [...text].forEach((c, i) => { left = Math.max(left, (last.get(c) ?? -1) + 1); last.set(c, i); best = Math.max(best, i - left + 1); }); return best;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"abba-a","metric":3}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"aa-x","metric":3}
