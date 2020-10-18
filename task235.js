/* 📌 Задача 235. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем построй ориентированный граф переходов между соседними значениями и найди BFS-расстояния от первого значения. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":[[3,0],[0,1],[1,1],[2,2]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[[0,0],[1,1]]}
