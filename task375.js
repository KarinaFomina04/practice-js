/* 📌 Задача 375. Для корректной Unicode-строки замени серии символов парой символ:длина, разделяя пары вертикальной чертой; затем найди самое длинное слово между пробелами, при равенстве выбери первое. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text], runs = []; for (let i = 0; i < chars.length;) { let j = i + 1; while (chars[j] === chars[i]) j++; runs.push(chars[i] + ':' + (j - i)); i = j; } return runs.join('|');
}

function measure(text) {
  return text.split(/\s+/u).reduce((best, word) => [...word].length > [...best].length ? word : best, '');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"A:1|b:2|a:1| :1|1:1|2:1| :1|#:1|<:1|a:1|>:1","metric":":1|#:1|<:1|a:1|>:1"}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":""}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀:1|a:2|😀:1| :1|(:1|[:1|x:1|]:1|):1","metric":":1|(:1|[:1|x:1|]:1|):1"}
