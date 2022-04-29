/* 📌 Задача 571. Создай замыкание с мемоизацией по содержимому массива; повторный вызов не должен выполнять вычисление, изменение массива должно приводить к новому ключу. Вычисление: вычисли минимум и максимум, для пустого массива верни null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  if (!items.length) return null; return items.reduce((r, x) => ({min: Math.min(r.min, x), max: Math.max(r.max, x)}), {min: items[0], max: items[0]});
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

console.log(JSON.stringify(worker(input))); // Вывод 1: {"value":{"min":-1,"max":3},"calls":1}
console.log(JSON.stringify(worker([...input]))); // Вывод 2: {"value":{"min":-1,"max":3},"calls":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":null,"calls":2}
