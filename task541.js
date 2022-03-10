/* 📌 Задача 541. Создай замыкание с мемоизацией по содержимому массива; повторный вызов не должен выполнять вычисление, изменение массива должно приводить к новому ключу. Вычисление: сгруппируй числа по знаку. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = {negative: [], zero: [], positive: []}; for (const x of items) result[x < 0 ? "negative" : x > 0 ? "positive" : "zero"].push(x); return result;
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

console.log(JSON.stringify(worker(input))); // Вывод 1: {"value":{"negative":[-1],"zero":[0],"positive":[3,3]},"calls":1}
console.log(JSON.stringify(worker([...input]))); // Вывод 2: {"value":{"negative":[-1],"zero":[0],"positive":[3,3]},"calls":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":{"negative":[],"zero":[],"positive":[]},"calls":2}
