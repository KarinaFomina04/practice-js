/* 📌 Задача 272. Для массива целых чисел сначала замени значения накопленными суммами; затем вычисли длину максимального отрезка с равным количеством положительных и неположительных значений. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  let total = 0; return items.map(x => total += x);
}

function analyze(a) {
  const first = new Map([[0, -1]]); let balance = 0, best = 0;
  a.forEach((x, i) => { balance += x > 0 ? 1 : -1; if (first.has(balance)) best = Math.max(best, i - first.get(balance)); else first.set(balance, i); });
  return best;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,2,5,5,7],"answer":0}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2,4,6],"answer":0}
