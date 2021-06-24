/* 📌 Задача 385. Для корректной Unicode-строки экранируй пять специальных символов HTML: амперсанд, угловые скобки и обе кавычки; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const escapes = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
  return text.replace(/[&<>"']/g, c => escapes[c]);
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba 12 #&lt;a&gt;","metric":["Ab","bb","ba","a "," 1","12","2 "," #","#&","&l","lt","t;",";a","a&","&g","gt"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":["😀a","aa","a😀","😀 "," (","([","[x","x]","])"]}
