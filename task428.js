/* 📌 Задача 428. Для корректной Unicode-строки замени каждую ASCII-цифру её английским названием в квадратных скобках; затем найди сумму ASCII-цифр в результате. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const names = ['zero','one','two','three','four','five','six','seven','eight','nine']; return text.replace(/\d/g, c => '[' + names[Number(c)] + ']');
}

function measure(text) {
  return [...text].reduce((sum, c) => sum + (/\d/.test(c) ? Number(c) : 0), 0);
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba [one][two] #<a>","metric":0}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":0}
