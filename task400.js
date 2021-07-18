/* 📌 Задача 400. Для корректной Unicode-строки преврати строку в последовательность шестнадцатеричных кодовых точек через пробел; затем найди длину наибольшей подстроки без повторяющихся символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].map(c => c.codePointAt(0).toString(16)).join(' ');
}

function measure(text) {
  const last = new Map(); let left = 0, best = 0; [...text].forEach((c, i) => { left = Math.max(left, (last.get(c) ?? -1) + 1); last.set(c, i); best = Math.max(best, i - left + 1); }); return best;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"41 62 62 61 20 31 32 20 23 3c 61 3e","metric":5}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"1f600 61 61 1f600 20 28 5b 78 5d 29","metric":5}
