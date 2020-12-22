/* 📌 Задача 275. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем вычисли длину максимального отрезка с равным количеством положительных и неположительных значений. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":2}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":4}
