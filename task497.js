/* 📌 Задача 497. Для корректной Unicode-строки преврати латинские буквы в их номера в алфавите, остальные символы сохрани; затем вычисли 32-битный беззнаковый полиномиальный хеш по кодовым точкам с основанием 31. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].map(c => /[a-z]/i.test(c) ? String(c.toLowerCase().charCodeAt(0) - 96) : c).join('');
}

function measure(text) {
  let hash = 0; for (const c of text) hash = (Math.imul(hash, 31) + c.codePointAt(0)) >>> 0; return hash;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"1221 12 #<1>","metric":410643205}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀11😀 ([24])","metric":231656225}
