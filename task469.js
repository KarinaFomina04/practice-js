/* 📌 Задача 469. Для корректной Unicode-строки удали латинские гласные без учёта регистра; затем проверь, является ли результат палиндромом с учётом всех символов. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.replace(/[aeiou]/gi, '');
}

function measure(text) {
  return text === [...text].reverse().join('');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"bb 12 #<>","metric":false}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":true}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀😀 ([x])","metric":false}
