/* 📌 Задача 495. Для корректной Unicode-строки преврати латинские буквы в их номера в алфавите, остальные символы сохрани; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].map(c => /[a-z]/i.test(c) ? String(c.toLowerCase().charCodeAt(0) - 96) : c).join('');
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"1221 12 #<1>","metric":["12","22","21","1 "," 1","2 "," #","#<","<1","1>"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀11😀 ([24])","metric":["😀1","11","1😀","😀 "," (","([","[2","24","4]","])"]}
