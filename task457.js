/* 📌 Задача 457. Для корректной Unicode-строки отсортируй символы по кодовым точкам Unicode; затем найди первый неповторяющийся символ результата или null. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].sort((a, b) => a.codePointAt(0) - b.codePointAt(0)).join('');
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...text].find(c => counts.get(c) === 1) ?? null;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"  #12<>Aaabb","metric":"#"}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":null}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":" ()[]aax😀😀","metric":" "}
