/* 📌 Задача 578. Реализуй Proxy над функцией с ловушкой apply и кэшем по содержимому массива; верни результат и размер кэша. Вычисление: вычисли минимум и максимум, для пустого массива верни null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  if (!items.length) return null; return items.reduce((r, x) => ({min: Math.min(r.min, x), max: Math.max(r.max, x)}), {min: items[0], max: items[0]});
}

const cache = new Map();
const worker = new Proxy(compute, {
  apply(target, thisArg, args) {
    const key = JSON.stringify(args[0]);
    if (!cache.has(key)) cache.set(key, Reflect.apply(target, thisArg, args));
    return {value: cache.get(key), cached: cache.size};
  }
});

console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 1: {"value":{"min":-1,"max":3},"cached":1}
console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 2: {"value":{"min":-1,"max":3},"cached":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":null,"cached":2}
