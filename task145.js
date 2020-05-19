/* 📌 Задача 145. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем найди все суммы подмножеств с учётом пустого подмножества, результат отсортируй. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":[0,1,2,3,4,5,6,7,8,9]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[0]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[0,1,2]}
