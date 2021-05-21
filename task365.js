/* 📌 Задача 365. Для корректной Unicode-строки выполни ROT13 для латинских букв с сохранением регистра; затем вычисли 32-битный беззнаковый полиномиальный хеш по кодовым точкам с основанием 31. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() <= 'm' ? 13 : -13)));
}

function measure(text) {
  let hash = 0; for (const c of text) hash = (Math.imul(hash, 31) + c.codePointAt(0)) >>> 0; return hash;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Noon 12 #<n>","metric":4226198984}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀nn😀 ([k])","metric":220656932}
