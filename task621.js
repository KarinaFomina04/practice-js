/* 📌 Задача 621. Создай замыкание с мемоизацией по содержимому массива; повторный вызов не должен выполнять вычисление, изменение массива должно приводить к новому ключу. Вычисление: построй разности соседних значений. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.slice(1).map((x, i) => x - items[i]);
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

console.log(JSON.stringify(worker(input))); // Вывод 1: {"value":[-4,4,-3],"calls":1}
console.log(JSON.stringify(worker([...input]))); // Вывод 2: {"value":[-4,4,-3],"calls":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":[],"calls":2}
