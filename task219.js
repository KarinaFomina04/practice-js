/* 📌 Задача 219. Для массива целых чисел сначала вычти из каждого элемента медиану исходного массива, для чётной длины возьми нижнюю медиану; затем верни обход in-order дерева, заданного массивом с потомками 2i+1 и 2i+2. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  if (!items.length) return [];
  const sorted = [...items].sort((a, b) => a - b);
  const median = sorted[Math.floor((sorted.length - 1) / 2)];
  return items.map(x => x - median);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,-3,1,-2,0],"answer":[-2,-3,0,1,1]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[1,0,0,1]}
