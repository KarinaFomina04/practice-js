/* 📌 Задача 691. Создай замыкание с мемоизацией по содержимому массива; повторный вызов не должен выполнять вычисление, изменение массива должно приводить к новому ключу. Вычисление: преобразуй массив в непересекающиеся интервалы последовательных целых после устранения дублей. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result = []; for (const x of sorted) { if (result.length && result.at(-1)[1] + 1 === x) result.at(-1)[1] = x; else result.push([x, x]); } return result;
}

function createWorker(compute) {
  const cache = new Map(); let calls = 0;
  return items => {
    const key = JSON.stringify(items);
    if (!cache.has(key)) { calls++; cache.set(key, compute(items)); }
    return {value: cache.get(key), calls};
  };
}
const worker = createWorker(compute);
const input = [3, -1, 3, 0];

console.log(JSON.stringify(worker(input))); // Вывод 1: {"value":[[-1,0],[3,3]],"calls":1}
console.log(JSON.stringify(worker([...input]))); // Вывод 2: {"value":[[-1,0],[3,3]],"calls":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":[],"calls":2}
