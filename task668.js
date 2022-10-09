/* 📌 Задача 668. Реализуй Proxy над функцией с ловушкой apply и кэшем по содержимому массива; верни результат и размер кэша. Вычисление: найди нижнюю медиану и абсолютные отклонения от неё, для пустого верни null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  if (!items.length) return null; const sorted = [...items].sort((a, b) => a - b), median = sorted[Math.floor((items.length - 1) / 2)]; return {median, deviations: items.map(x => Math.abs(x - median))};
}

const cache = new Map();
const worker = new Proxy(compute, {
  apply(target, thisArg, args) {
    const key = JSON.stringify(args[0]);
    if (!cache.has(key)) cache.set(key, Reflect.apply(target, thisArg, args));
    return {value: cache.get(key), cached: cache.size};
  }
});

console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 1: {"value":{"median":0,"deviations":[3,1,3,0]},"cached":1}
console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 2: {"value":{"median":0,"deviations":[3,1,3,0]},"cached":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":null,"cached":2}
