/* 📌 Задача 441. Для корректной Unicode-строки выполни percent-кодирование компонента URI; затем найди самое длинное слово между пробелами, при равенстве выбери первое. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return encodeURIComponent(text);
}

function measure(text) {
  return text.split(/\s+/u).reduce((best, word) => [...word].length > [...best].length ? word : best, '');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba%2012%20%23%3Ca%3E","metric":"Abba%2012%20%23%3Ca%3E"}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":""}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"%F0%9F%98%80aa%F0%9F%98%80%20(%5Bx%5D)","metric":"%F0%9F%98%80aa%F0%9F%98%80%20(%5Bx%5D)"}
