/* 📌 Задача 396. Для корректной Unicode-строки преврати строку в последовательность шестнадцатеричных кодовых точек через пробел; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].map(c => c.codePointAt(0).toString(16)).join(' ');
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"41 62 62 61 20 31 32 20 23 3c 61 3e","metric":["41","1 "," 6","62","2 ","61"," 2","20","0 "," 3","31","32","23","3 ","3c","c ","3e"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"1f600 61 61 1f600 20 28 5b 78 5d 29","metric":["1f","f6","60","00","0 "," 6","61","1 "," 1"," 2","20","28","8 "," 5","5b","b "," 7","78","5d","d ","29"]}
