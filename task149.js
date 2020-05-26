/* 📌 Задача 149. Для массива целых чисел сначала вычти из каждого элемента медиану исходного массива, для чётной длины возьми нижнюю медиану; затем найди все суммы подмножеств с учётом пустого подмножества, результат отсортируй. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  if (!items.length) return [];
  const sorted = [...items].sort((a, b) => a - b);
  const median = sorted[Math.floor((sorted.length - 1) / 2)];
  return items.map(x => x - median);
}

function analyze(a) {
  let sums = new Set([0]);
  for (const x of a) sums = new Set([...sums, ...[...sums].map(sum => sum + x)]);
  return [...sums].sort((x, y) => x - y);
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,-3,1,-2,0],"answer":[-5,-4,-3,-2,-1,0,1,2]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[0]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[0,1,2]}
