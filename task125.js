/* 📌 Задача 125. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем найди максимальную сумму несоседних элементов, разрешая пустой выбор. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
}

function analyze(a) {
  let skip = 0, take = -Infinity;
  for (const x of a) [skip, take] = [Math.max(skip, take), skip + x];
  return Math.max(skip, take);
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":8}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":1}
