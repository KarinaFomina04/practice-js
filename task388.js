/* 📌 Задача 388. Для корректной Unicode-строки экранируй пять специальных символов HTML: амперсанд, угловые скобки и обе кавычки; затем проверь правильность вложенности скобок (), [] и {}, игнорируя остальные символы. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const escapes = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
  return text.replace(/[&<>"']/g, c => escapes[c]);
}

function measure(text) {
  const pairs = {')': '(', ']': '[', '}': '{'}, stack = []; for (const c of text) { if ('([{'.includes(c)) stack.push(c); else if (c in pairs && stack.pop() !== pairs[c]) return false; } return stack.length === 0;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba 12 #&lt;a&gt;","metric":true}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":true}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":true}
