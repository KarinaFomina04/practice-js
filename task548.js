/* 📌 Задача 548. Реализуй Proxy над функцией с ловушкой apply и кэшем по содержимому массива; верни результат и размер кэша. Вычисление: сгруппируй числа по знаку. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const result = {negative: [], zero: [], positive: []}; for (const x of items) result[x < 0 ? "negative" : x > 0 ? "positive" : "zero"].push(x); return result;
}

const cache = new Map();
const worker = new Proxy(compute, {
  apply(target, thisArg, args) {
    const key = JSON.stringify(args[0]);
    if (!cache.has(key)) cache.set(key, Reflect.apply(target, thisArg, args));
    return {value: cache.get(key), cached: cache.size};
  }
});

console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 1: {"value":{"negative":[-1],"zero":[0],"positive":[3,3]},"cached":1}
console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 2: {"value":{"negative":[-1],"zero":[0],"positive":[3,3]},"cached":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":{"negative":[],"zero":[],"positive":[]},"cached":2}
