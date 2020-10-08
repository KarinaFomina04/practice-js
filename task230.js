/* 📌 Задача 230. Для массива целых чисел сначала построй расстояния между последовательными появлениями одинаковых значений; затем разбей бинарное дерево в массивном представлении на уровни зигзагом. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const last = new Map(); const result = [];
  items.forEach((x, i) => {
    if (last.has(x)) result.push(i - last.get(x));
    last.set(x, i);
  });
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[2],"answer":[[2]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1],"answer":[[1],[1]]}
