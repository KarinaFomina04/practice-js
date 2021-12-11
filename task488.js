/* 📌 Задача 488. Для корректной Unicode-строки циклически сдвинь последовательность Unicode-символов влево на один; затем найди длину наибольшей подстроки без повторяющихся символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text]; return chars.slice(1).concat(chars.slice(0, 1)).join('');
}

function measure(text) {
  const last = new Map(); let left = 0, best = 0; [...text].forEach((c, i) => { left = Math.max(left, (last.get(c) ?? -1) + 1); last.set(c, i); best = Math.max(best, i - left + 1); }); return best;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"bba 12 #<a>A","metric":8}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"aa😀 ([x])😀","metric":8}
