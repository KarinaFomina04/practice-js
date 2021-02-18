/* 📌 Задача 310. Для корректной Unicode-строки удали соседние повторы символов; затем вычисли 32-битный беззнаковый полиномиальный хеш по кодовым точкам с основанием 31. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].filter((x, i, a) => i === 0 || x !== a[i - 1]).join('');
}

function measure(text) {
  let hash = 0; for (const c of text) hash = (Math.imul(hash, 31) + c.codePointAt(0)) >>> 0; return hash;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Aba 12 #<a>","metric":4084844789}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀a😀 ([x])","metric":1059674160}
