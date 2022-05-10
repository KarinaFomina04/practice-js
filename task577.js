/* 📌 Задача 577. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: вычисли минимум и максимум, для пустого массива верни null. Вход содержит конечные целые числа. Уровень: Junior. */

function compute(items) {
  if (!items.length) return null; return items.reduce((r, x) => ({min: Math.min(r.min, x), max: Math.max(r.max, x)}), {min: items[0], max: items[0]});
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":{"min":-1,"max":3},"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":null,"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":{"min":1,"max":2},"requests":3}
