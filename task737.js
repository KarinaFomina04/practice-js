/* 📌 Задача 737. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: отранжируй значения соревнованием: одинаковые делят место и оставляют пропуски. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sorted = [...items].sort((a, b) => b - a), ranks = new Map(); sorted.forEach((x, i) => { if (!ranks.has(x)) ranks.set(x, i + 1); }); return items.map(x => ranks.get(x));
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":[1,4,1,3],"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":[],"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":[2,1],"requests":3}
