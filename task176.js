/* 📌 Задача 176. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем найди максимальный модуль разности элементов с разными индексами, для длины меньше двух верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Junior. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":3}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":null}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":1}
