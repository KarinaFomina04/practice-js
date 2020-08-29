/* 📌 Задача 206. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем найди максимальную площадь прямоугольника в гистограмме высот max(0, значение). Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":6}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":8}
