/* 📌 Задача 484. Для корректной Unicode-строки циклически сдвинь последовательность Unicode-символов влево на один; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text]; return chars.slice(1).concat(chars.slice(0, 1)).join('');
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"bba 12 #<a>A","metric":["bb","ba","a "," 1","12","2 "," #","#<","<a","a>",">A"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"aa😀 ([x])😀","metric":["aa","a😀","😀 "," (","([","[x","x]","])",")😀"]}
