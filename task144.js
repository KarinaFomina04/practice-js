/* 📌 Задача 144. Для массива целых чисел сначала замени каждую серию равных соседей её длиной; затем найди все суммы подмножеств с учётом пустого подмножества, результат отсортируй. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const runs = [];
  for (let i = 0; i < items.length;) {
    let end = i + 1;
    while (end < items.length && items[end] === items[i]) end++;
    runs.push(end - i); i = end;
  }
  return runs;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,1,1,1,1],"answer":[0,1,2,3,4,5]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[0]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[2,2],"answer":[0,2,4]}
