/* 📌 Задача 217. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем верни обход in-order дерева, заданного массивом с потомками 2i+1 и 2i+2. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  const result = [];
  function visit(index) { if (index >= a.length) return; visit(index * 2 + 1); result.push(a[index]); visit(index * 2 + 2); }
  visit(0); return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":[0,-1,2]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":[]}
