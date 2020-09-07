/* 📌 Задача 212. Для массива целых чисел сначала замени значения накопленными суммами; затем верни обход in-order дерева, заданного массивом с потомками 2i+1 и 2i+2. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  let total = 0; return items.map(x => total += x);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,2,5,5,7],"answer":[5,2,7,3,5]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2,4,6],"answer":[6,2,1,4]}
