/* 📌 Задача 180. Для массива целых чисел сначала построй расстояния между последовательными появлениями одинаковых значений; затем найди максимальный модуль разности элементов с разными индексами, для длины меньше двух верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Junior. */

function prepare(items) {
  const last = new Map(); const result = [];
  items.forEach((x, i) => {
    if (last.has(x)) result.push(i - last.get(x));
    last.set(x, i);
  });
  return result;
}

function analyze(a) {
  if (a.length < 2) return null;
  let low = a[0], high = a[0];
  for (const x of a) { low = Math.min(low, x); high = Math.max(high, x); }
  return high - low;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[2],"answer":null}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":null}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1],"answer":0}
