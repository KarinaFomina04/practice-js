/* 📌 Задача 226. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем разбей бинарное дерево в массивном представлении на уровни зигзагом. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":[[5],[5,2]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":[[4],[5]]}
