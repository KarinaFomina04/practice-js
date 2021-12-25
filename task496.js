/* 📌 Задача 496. Для корректной Unicode-строки преврати латинские буквы в их номера в алфавите, остальные символы сохрани; затем найди самое длинное слово между пробелами, при равенстве выбери первое. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].map(c => /[a-z]/i.test(c) ? String(c.toLowerCase().charCodeAt(0) - 96) : c).join('');
}

function measure(text) {
  return text.split(/\s+/u).reduce((best, word) => [...word].length > [...best].length ? word : best, '');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"1221 12 #<1>","metric":"1221"}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":""}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀11😀 ([24])","metric":"([24])"}
