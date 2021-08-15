/* 📌 Задача 416. Для корректной Unicode-строки сотри символ и предыдущий оставшийся символ для каждого знака #; затем найди длину самой длинной серии одинаковых символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const stack = []; for (const c of text) { if (c === '#') stack.pop(); else stack.push(c); } return stack.join('');
}

function measure(text) {
  let best = 0, run = 0, previous; for (const c of text) { run = c === previous ? run + 1 : 1; previous = c; best = Math.max(best, run); } return best;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba 12<a>","metric":2}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":2}
