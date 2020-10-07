/* 📌 Задача 229. Для массива целых чисел сначала вычти из каждого элемента медиану исходного массива, для чётной длины возьми нижнюю медиану; затем разбей бинарное дерево в массивном представлении на уровни зигзагом. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  if (!items.length) return [];
  const sorted = [...items].sort((a, b) => a - b);
  const median = sorted[Math.floor((sorted.length - 1) / 2)];
  return items.map(x => x - median);
}

function analyze(a) {
  const result = [];
  for (let start = 0, width = 1; start < a.length; start += width, width *= 2) {
    const level = a.slice(start, start + width); result.push(result.length % 2 ? level.reverse() : level);
  }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,-3,1,-2,0],"answer":[[1],[1,-3],[-2,0]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[[0],[1,0],[1]]}
