/* 📌 Задача 376. Для корректной Unicode-строки замени серии символов парой символ:длина, разделяя пары вертикальной чертой; затем вычисли 32-битный беззнаковый полиномиальный хеш по кодовым точкам с основанием 31. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text], runs = []; for (let i = 0; i < chars.length;) { let j = i + 1; while (chars[j] === chars[i]) j++; runs.push(chars[i] + ':' + (j - i)); i = j; } return runs.join('|');
}

function measure(text) {
  let hash = 0; for (const c of text) hash = (Math.imul(hash, 31) + c.codePointAt(0)) >>> 0; return hash;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"A:1|b:2|a:1| :1|1:1|2:1| :1|#:1|<:1|a:1|>:1","metric":3552960235}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀:1|a:2|😀:1| :1|(:1|[:1|x:1|]:1|):1","metric":638585490}
