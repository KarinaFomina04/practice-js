/* 📌 Задача 431. Для корректной Unicode-строки замени каждую ASCII-цифру её английским названием в квадратных скобках; затем вычисли 32-битный беззнаковый полиномиальный хеш по кодовым точкам с основанием 31. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const names = ['zero','one','two','three','four','five','six','seven','eight','nine']; return text.replace(/\d/g, c => '[' + names[Number(c)] + ']');
}

function measure(text) {
  let hash = 0; for (const c of text) hash = (Math.imul(hash, 31) + c.codePointAt(0)) >>> 0; return hash;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba [one][two] #<a>","metric":3917936284}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":1061043089}
