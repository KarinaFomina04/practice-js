/* 📌 Задача 286. Для корректной Unicode-строки разверни последовательность символов Unicode; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return [...text].reverse().join('');
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":">a<# 21 abbA","metric":[">a","a<","<#","# "," 2","21","1 "," a","ab","bb","bA"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":")]x[( 😀aa😀","metric":[")]","]x","x[","[(","( "," 😀","😀a","aa","a😀"]}
