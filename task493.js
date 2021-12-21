/* 📌 Задача 493. Для корректной Unicode-строки преврати латинские буквы в их номера в алфавите, остальные символы сохрани; затем найди длину самой длинной серии одинаковых символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].map(c => /[a-z]/i.test(c) ? String(c.toLowerCase().charCodeAt(0) - 96) : c).join('');
}

function measure(text) {
  let best = 0, run = 0, previous; for (const c of text) { run = c === previous ? run + 1 : 1; previous = c; best = Math.max(best, run); } return best;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"1221 12 #<1>","metric":2}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀11😀 ([24])","metric":2}
