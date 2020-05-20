/* 📌 Задача 146. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем найди все суммы подмножеств с учётом пустого подмножества, результат отсортируй. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":[0,2,5,7,10,12]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[0]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":[0,4,5,9]}
