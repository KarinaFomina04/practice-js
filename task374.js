/* 📌 Задача 374. Для корректной Unicode-строки замени серии символов парой символ:длина, разделяя пары вертикальной чертой; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const chars = [...text], runs = []; for (let i = 0; i < chars.length;) { let j = i + 1; while (chars[j] === chars[i]) j++; runs.push(chars[i] + ':' + (j - i)); i = j; } return runs.join('|');
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"A:1|b:2|a:1| :1|1:1|2:1| :1|#:1|<:1|a:1|>:1","metric":["A:",":1","1|","|b","b:",":2","2|","|a","a:","| "," :","|1","1:","|2","2:","|#","#:","|<","<:","|>",">:"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀:1|a:2|😀:1| :1|(:1|[:1|x:1|]:1|):1","metric":["😀:",":1","1|","|a","a:",":2","2|","|😀","| "," :","|(","(:","|[","[:","|x","x:","|]","]:","|)","):"]}
