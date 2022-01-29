/* 📌 Задача 517. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: устрани дубли с сохранением порядка. Вход содержит конечные целые числа. Уровень: Junior. */

function compute(items) {
  return [...new Set(items)];
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":[3,-1,0],"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":[],"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":[1,2],"requests":3}
