/* 📌 Задача 721. Создай замыкание с мемоизацией по содержимому массива; повторный вызов не должен выполнять вычисление, изменение массива должно приводить к новому ключу. Вычисление: построй границы серий одинакового знака как полуинтервалы индексов. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = []; for (let i = 0; i < items.length; i++) { if (i === 0 || Math.sign(items[i]) !== Math.sign(items[i - 1])) result.push([i, i + 1]); else result.at(-1)[1] = i + 1; } return result;
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

console.log(JSON.stringify(worker(input))); // Вывод 1: {"value":[[0,1],[1,2],[2,3],[3,4]],"calls":1}
console.log(JSON.stringify(worker([...input]))); // Вывод 2: {"value":[[0,1],[1,2],[2,3],[3,4]],"calls":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":[],"calls":2}
