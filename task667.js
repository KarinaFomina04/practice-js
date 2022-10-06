/* 📌 Задача 667. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: найди нижнюю медиану и абсолютные отклонения от неё, для пустого верни null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  if (!items.length) return null; const sorted = [...items].sort((a, b) => a - b), median = sorted[Math.floor((items.length - 1) / 2)]; return {median, deviations: items.map(x => Math.abs(x - median))};
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":{"median":0,"deviations":[3,1,3,0]},"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":null,"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":{"median":1,"deviations":[0,1]},"requests":3}
