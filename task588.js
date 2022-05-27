/* 📌 Задача 588. Реализуй Proxy над функцией с ловушкой apply и кэшем по содержимому массива; верни результат и размер кэша. Вычисление: сверни соседние одинаковые значения в пары значение-количество. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const result = []; for (const x of items) { if (result.length && result.at(-1)[0] === x) result.at(-1)[1]++; else result.push([x, 1]); } return result;
}

const cache = new Map();
const worker = new Proxy(compute, {
  apply(target, thisArg, args) {
    const key = JSON.stringify(args[0]);
    if (!cache.has(key)) cache.set(key, Reflect.apply(target, thisArg, args));
    return {value: cache.get(key), cached: cache.size};
  }
});

console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 1: {"value":[[3,1],[-1,1],[3,1],[0,1]],"cached":1}
console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 2: {"value":[[3,1],[-1,1],[3,1],[0,1]],"cached":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":[],"cached":2}
