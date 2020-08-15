/* 📌 Задача 197. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем вычисли объём воды между столбцами высоты max(0, значение). Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  const heights = a.map(x => Math.max(0, x)); let left = 0, right = heights.length - 1, lm = 0, rm = 0, water = 0;
  while (left <= right) {
    if (lm <= rm) { lm = Math.max(lm, heights[left]); water += lm - heights[left++]; }
    else { rm = Math.max(rm, heights[right]); water += rm - heights[right--]; }
  }
  return water;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":0}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":0}
