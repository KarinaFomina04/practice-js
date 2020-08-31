/* 📌 Задача 207. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем найди максимальную площадь прямоугольника в гистограмме высот max(0, значение). Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  const heights = [...a.map(x => Math.max(0, x)), 0], stack = []; let best = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack.at(-1)] > heights[i]) {
      const height = heights[stack.pop()], width = i - (stack.at(-1) ?? -1) - 1;
      best = Math.max(best, height * width);
    }
    stack.push(i);
  }
  return best;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":2}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":0}
