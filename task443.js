/* 📌 Задача 443. Для корректной Unicode-строки выполни percent-кодирование компонента URI; затем проверь правильность вложенности скобок (), [] и {}, игнорируя остальные символы. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return encodeURIComponent(text);
}

function measure(text) {
  const pairs = {')': '(', ']': '[', '}': '{'}, stack = []; for (const c of text) { if ('([{'.includes(c)) stack.push(c); else if (c in pairs && stack.pop() !== pairs[c]) return false; } return stack.length === 0;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba%2012%20%23%3Ca%3E","metric":true}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":true}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"%F0%9F%98%80aa%F0%9F%98%80%20(%5Bx%5D)","metric":true}
