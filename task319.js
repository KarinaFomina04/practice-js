/* 📌 Задача 319. Для корректной Unicode-строки разверни порядок слов, разделённых пробелами; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.trim().split(/\s+/u).filter(Boolean).reverse().join(' ');
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"#<a> 12 Abba","metric":["#<","<a","a>","> "," 1","12","2 "," A","Ab","bb","ba"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"([x]) 😀aa😀","metric":["([","[x","x]","])",") "," 😀","😀a","aa","a😀"]}
