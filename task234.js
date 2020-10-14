/* 📌 Задача 234. Для массива целых чисел сначала замени каждую серию равных соседей её длиной; затем построй ориентированный граф переходов между соседними значениями и найди BFS-расстояния от первого значения. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

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
  if (!a.length) return [];
  const graph = new Map(a.map(x => [x, new Set()]));
  for (let i = 1; i < a.length; i++) graph.get(a[i - 1]).add(a[i]);
  const distance = new Map([[a[0], 0]]), queue = [a[0]];
  for (let head = 0; head < queue.length; head++) for (const next of graph.get(queue[head])) {
    if (!distance.has(next)) { distance.set(next, distance.get(queue[head]) + 1); queue.push(next); }
  }
  return [...distance];
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,1,1,1,1],"answer":[[1,0]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[2,2],"answer":[[2,0]]}
