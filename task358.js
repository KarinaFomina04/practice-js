/* 📌 Задача 358. Для корректной Unicode-строки выполни ROT13 для латинских букв с сохранением регистра; затем найди первый неповторяющийся символ результата или null. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() <= 'm' ? 13 : -13)));
}

function measure(text) {
  const counts = new Map(); for (const c of text) counts.set(c, (counts.get(c) ?? 0) + 1); return [...text].find(c => counts.get(c) === 1) ?? null;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Noon 12 #<n>","metric":"N"}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":null}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀nn😀 ([k])","metric":" "}
