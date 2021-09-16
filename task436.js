/* 📌 Задача 436. Для корректной Unicode-строки выполни percent-кодирование компонента URI; затем проверь, является ли результат палиндромом с учётом всех символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return encodeURIComponent(text);
}

function measure(text) {
  return text === [...text].reverse().join('');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba%2012%20%23%3Ca%3E","metric":false}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":true}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"%F0%9F%98%80aa%F0%9F%98%80%20(%5Bx%5D)","metric":false}
