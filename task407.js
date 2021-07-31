/* 📌 Задача 407. Для корректной Unicode-строки переставь символы: сначала чётные индексы, затем нечётные; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text]; return chars.filter((_, i) => i % 2 === 0).concat(chars.filter((_, i) => i % 2)).join('');
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Ab 2#aba1 <>","metric":["Ab","b "," 2","2#","#a","ab","ba","a1","1 "," <","<>"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀a []a😀(x)","metric":["😀a","a "," [","[]","]a","a😀","😀(","(x","x)"]}
