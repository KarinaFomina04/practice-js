/* 📌 Задача 482. Для корректной Unicode-строки циклически сдвинь последовательность Unicode-символов влево на один; затем найди длину самой длинной серии одинаковых символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text]; return chars.slice(1).concat(chars.slice(0, 1)).join('');
}

function measure(text) {
  let best = 0, run = 0, previous; for (const c of text) { run = c === previous ? run + 1 : 1; previous = c; best = Math.max(best, run); } return best;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"bba 12 #<a>A","metric":2}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"aa😀 ([x])😀","metric":2}
