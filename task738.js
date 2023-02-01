/* 📌 Задача 738. Реализуй Proxy над функцией с ловушкой apply и кэшем по содержимому массива; верни результат и размер кэша. Вычисление: отранжируй значения соревнованием: одинаковые делят место и оставляют пропуски. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const sorted = [...items].sort((a, b) => b - a), ranks = new Map(); sorted.forEach((x, i) => { if (!ranks.has(x)) ranks.set(x, i + 1); }); return items.map(x => ranks.get(x));
}

const cache = new Map();
const worker = new Proxy(compute, {
  apply(target, thisArg, args) {
    const key = JSON.stringify(args[0]);
    if (!cache.has(key)) cache.set(key, Reflect.apply(target, thisArg, args));
    return {value: cache.get(key), cached: cache.size};
  }
});

console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 1: {"value":[1,4,1,3],"cached":1}
console.log(JSON.stringify(worker([3, -1, 3, 0]))); // Вывод 2: {"value":[1,4,1,3],"cached":1}
console.log(JSON.stringify(worker([]))); // Вывод 3: {"value":[],"cached":2}
