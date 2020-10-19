/* 📌 Задача 236. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем построй ориентированный граф переходов между соседними значениями и найди BFS-расстояния от первого значения. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":[[5,0],[2,1]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":[[4,0],[5,1]]}
