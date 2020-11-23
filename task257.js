/* 📌 Задача 257. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем найди медиану каждого префикса, для чётной длины усредни два центральных значения. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  const sorted = [], result = [];
  for (const x of a) {
    let left = 0, right = sorted.length;
    while (left < right) { const middle = (left + right) >>> 1; if (sorted[middle] < x) left = middle + 1; else right = middle; }
    sorted.splice(left, 0, x); const middle = sorted.length >>> 1;
    result.push(sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2);
  }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":[-1,-0.5,0]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":[]}
