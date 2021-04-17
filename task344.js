/* 📌 Задача 344. Для корректной Unicode-строки преврати слова из латинских букв в kebab-case; затем проверь правильность вложенности скобок (), [] и {}, игнорируя остальные символы. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.match(/[a-z]+/gi)?.map(x => x.toLowerCase()).join('-') ?? '';
}

function measure(text) {
  const pairs = {')': '(', ']': '[', '}': '{'}, stack = []; for (const c of text) { if ('([{'.includes(c)) stack.push(c); else if (c in pairs && stack.pop() !== pairs[c]) return false; } return stack.length === 0;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"abba-a","metric":true}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":true}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"aa-x","metric":true}
