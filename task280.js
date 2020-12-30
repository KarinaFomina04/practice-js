/* 📌 Задача 280. Для массива целых чисел сначала построй расстояния между последовательными появлениями одинаковых значений; затем вычисли длину максимального отрезка с равным количеством положительных и неположительных значений. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const last = new Map(); const result = [];
  items.forEach((x, i) => {
    if (last.has(x)) result.push(i - last.get(x));
    last.set(x, i);
  });
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[2],"answer":0}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1],"answer":0}
