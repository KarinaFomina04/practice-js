/* 📌 Задача 255. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем найди медиану каждого префикса, для чётной длины усредни два центральных значения. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":[3,1.5,3,2,2]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[0,0,0,0.5]}
