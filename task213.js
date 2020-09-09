/* 📌 Задача 213. Для массива целых чисел сначала построй разности соседних значений; затем верни обход in-order дерева, заданного массивом с потомками 2i+1 и 2i+2. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  return items.slice(1).map((x, i) => x - items[i]);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-4,4,-3,2],"answer":[2,4,-4,-3]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,1,0],"answer":[1,0,0]}
