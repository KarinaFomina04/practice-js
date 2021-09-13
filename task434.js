/* 📌 Задача 434. Для корректной Unicode-строки замени каждую ASCII-цифру её английским названием в квадратных скобках; затем найди минимальный период результата в символах Unicode за линейное время, для пустого верни ноль. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Senior. */

function encode(text) {
  const names = ['zero','one','two','three','four','five','six','seven','eight','nine']; return text.replace(/\d/g, c => '[' + names[Number(c)] + ']');
}

function measure(text) {
  const chars = [...text];
  if (!chars.length) return 0;
  // Префикс-функция хранит длину наибольшего собственного префикса-суффикса.
  const prefix = Array(chars.length).fill(0);
  for (let i = 1; i < chars.length; i++) {
    let matched = prefix[i - 1];
    while (matched && chars[i] !== chars[matched]) matched = prefix[matched - 1];
    if (chars[i] === chars[matched]) matched++;
    prefix[i] = matched;
  }
  const period = chars.length - prefix.at(-1);
  return chars.length % period === 0 ? period : chars.length;
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba [one][two] #<a>","metric":20}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":0}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"😀aa😀 ([x])","metric":10}
