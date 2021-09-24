/* 📌 Задача 440. Для корректной Unicode-строки выполни percent-кодирование компонента URI; затем построй все уникальные биграммы по символам Unicode. Верни объект с преобразованной строкой и вычисленным показателем. Уровень: Middle. */

function encode(text) {
  return encodeURIComponent(text);
}

function measure(text) {
  const chars = [...text]; return [...new Set(chars.slice(1).map((c, i) => chars[i] + c))];
}

function solve(text) {
  const encoded = encode(text);
  return { encoded, metric: measure(encoded) };
}

console.log(JSON.stringify(solve('Abba 12 #<a>'))); // Вывод 1: {"encoded":"Abba%2012%20%23%3Ca%3E","metric":["Ab","bb","ba","a%","%2","20","01","12","2%","0%","23","3%","%3","3C","Ca","3E"]}
console.log(JSON.stringify(solve(''))); // Вывод 2: {"encoded":"","metric":[]}
console.log(JSON.stringify(solve('😀aa😀 ([x])'))); // Вывод 3: {"encoded":"%F0%9F%98%80aa%F0%9F%98%80%20(%5Bx%5D)","metric":["%F","F0","0%","%9","9F","F%","98","8%","%8","80","0a","aa","a%","%2","20","0(","(%","%5","5B","Bx","x%","5D","D)"]}
