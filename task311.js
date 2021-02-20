/* 📌 Задача 311. Для корректной Unicode-строки удали соседние повторы символов; затем проверь правильность вложенности скобок (), [] и {}, игнорируя остальные символы. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].filter((x, i, a) => i === 0 || x !== a[i - 1]).join('');
}

function measure(text) {
  const pairs = {')': '(', ']': '[', '}': '{'}, stack = []; for (const c of text) { if ('([{'.includes(c)) stack.push(c); else if (c in pairs && stack.pop() !== pairs[c]) return false; } return stack.length === 0;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Aba 12 #<a>","metric":true}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":true}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀a😀 ([x])","metric":true}
