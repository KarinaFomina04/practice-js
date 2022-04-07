/* 📌 Задача 557. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: рассчитай скользящее среднее полных окон длины два. Вход содержит конечные целые числа. Уровень: Junior. */

function compute(items) {
  return items.slice(1).map((x, i) => (x + items[i]) / 2);
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":[1,1,1.5],"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":[],"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":[1.5],"requests":3}
