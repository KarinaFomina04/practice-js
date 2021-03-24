/* 📌 Задача 330. Для корректной Unicode-строки разверни символы внутри каждого слова, сохраняя пробелы; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return text.replace(/\S+/gu, word => [...word].reverse().join(''));
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"abbA 21 >a<#","metric":["ab","bb","bA","A "," 2","21","1 "," >",">a","a<","<#"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 )]x[(","metric":["😀a","aa","a😀","😀 "," )",")]","]x","x[","[("]}
