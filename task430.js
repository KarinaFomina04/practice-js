/* 📌 Задача 430. Для корректной Unicode-строки замени каждую ASCII-цифру её английским названием в квадратных скобках; затем найди самое длинное слово между пробелами, при равенстве выбери первое. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  const names = ['zero','one','two','three','four','five','six','seven','eight','nine']; return text.replace(/\d/g, c => '[' + names[Number(c)] + ']');
}

function measure(text) {
  return text.split(/\s+/u).reduce((best, word) => [...word].length > [...best].length ? word : best, '');
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba [one][two] #<a>","metric":"[one][two]"}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":""}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":"([x])"}
