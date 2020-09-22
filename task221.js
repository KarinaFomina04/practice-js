/* 📌 Задача 221. Для массива целых чисел сначала оставь только первые появления значений; затем разбей бинарное дерево в массивном представлении на уровни зигзагом. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  return [...new Set(items)];
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,-1,0,2],"answer":[[3],[0,-1],[2]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2],"answer":[[1],[2]]}
