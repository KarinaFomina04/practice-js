/* 📌 Задача 259. Для массива целых чисел сначала вычти из каждого элемента медиану исходного массива, для чётной длины возьми нижнюю медиану; затем найди медиану каждого префикса, для чётной длины усредни два центральных значения. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  if (!items.length) return [];
  const sorted = [...items].sort((a, b) => a - b);
  const median = sorted[Math.floor((sorted.length - 1) / 2)];
  return items.map(x => x - median);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,-3,1,-2,0],"answer":[1,-1,1,-0.5,0]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[0,0,0,0.5]}
