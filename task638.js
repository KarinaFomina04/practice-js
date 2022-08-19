/* 📌 Задача 638. Реализуй Proxy над функцией с ловушкой apply и кэшем по содержимому массива; верни результат и размер кэша. Вычисление: верни элементы с частотой ровно один. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const counts = new Map(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return items.filter(x => counts.get(x) === 1);
}

const cache = new Map();
const worker = new Proxy(compute, {
  apply(target, thisArg, args) {
    const key = JSON.stringify(args[0]);
    if (!cache.has(key)) cache.set(key, Reflect.apply(target, thisArg, args));
    return {value: cache.get(key), cached: cache.size};
  }
});

console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 1: {"value":[-1,0],"cached":1}
console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 2: {"value":[-1,0],"cached":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":[],"cached":2}
