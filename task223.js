/* 📌 Задача 223. Для массива целых чисел сначала построй разности соседних значений; затем разбей бинарное дерево в массивном представлении на уровни зигзагом. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  return items.slice(1).map((x, i) => x - items[i]);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-4,4,-3,2],"answer":[[-4],[-3,4],[2]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,1,0],"answer":[[0],[0,1]]}
