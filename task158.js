/* 📌 Задача 158. Для массива целых чисел сначала замени каждый элемент максимумом его префикса; затем сгруппируй соседние строго возрастающие серии. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Junior. */

function prepare(items) {
  let maximum = -Infinity;
  return items.map(x => maximum = Math.max(maximum, x));
}

function analyze(a) {
  const result = [];
  for (const x of a) { if (!result.length || result.at(-1).at(-1) >= x) result.push([]); result.at(-1).push(x); }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,3,3,3,3],"answer":[[3],[3],[3],[3],[3]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1,2,2],"answer":[[1],[1,2],[2]]}
