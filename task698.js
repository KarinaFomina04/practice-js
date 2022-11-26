/* 📌 Задача 698. Реализуй Proxy над функцией с ловушкой apply и кэшем по содержимому массива; верни результат и размер кэша. Вычисление: преобразуй массив в непересекающиеся интервалы последовательных целых после устранения дублей. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result = []; for (const x of sorted) { if (result.length && result.at(-1)[1] + 1 === x) result.at(-1)[1] = x; else result.push([x, x]); } return result;
}

const cache = new Map();
const worker = new Proxy(compute, {
  apply(target, thisArg, args) {
    const key = JSON.stringify(args[0]);
    if (!cache.has(key)) cache.set(key, Reflect.apply(target, thisArg, args));
    return {value: cache.get(key), cached: cache.size};
  }
});

console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 1: {"value":[[-1,0],[3,3]],"cached":1}
console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 2: {"value":[[-1,0],[3,3]],"cached":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":[],"cached":2}
