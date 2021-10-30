/* 📌 Задача 462. Для корректной Unicode-строки отсортируй символы по кодовым точкам Unicode; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].sort((a, b) => a.codePointAt(0) - b.codePointAt(0)).join('');
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"  #12<>Aaabb","metric":["  "," #","#1","12","2<","<>",">A","Aa","aa","ab","bb"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":" ()[]aax😀😀","metric":[" (","()",")[","[]","]a","aa","ax","x😀","😀😀"]}
