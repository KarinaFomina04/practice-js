/* 📌 Задача 467. Для корректной Unicode-строки отсортируй символы по кодовым точкам Unicode; затем найди минимальный период результата в символах Unicode за линейное время, для пустого верни ноль. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Senior. */

function encode(text) {
  return [...text].sort((a, b) => a.codePointAt(0) - b.codePointAt(0)).join('');
}

function measure(text) {
  const chars = [...text];
  if (!chars.length) return 0;
  // Префикс-функция хранит длину наибольшего собственного префикса-суффикса.
  const prefix = Array(chars.length).fill(0);
  for (let i = 1; i < chars.length; i++) {
    let matched = prefix[i - 1];
    while (matched && chars[i] !== chars[matched]) matched = prefix[matched - 1];
    if (chars[i] === chars[matched]) matched++;
    prefix[i] = matched;
  }
  const period = chars.length - prefix.at(-1);
  return chars.length % period === 0 ? period : chars.length;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"  #12<>Aaabb","metric":12}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":" ()[]aax😀😀","metric":10}
