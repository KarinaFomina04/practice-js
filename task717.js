/* 📌 Задача 717. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: составь отчёт о сумме, количестве и среднем, для пустого среднего используй null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sum = items.reduce((a, b) => a + b, 0); return {sum, count: items.length, average: items.length ? sum / items.length : null};
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":{"sum":5,"count":4,"average":1.25},"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":{"sum":0,"count":0,"average":null},"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":{"sum":3,"count":2,"average":1.5},"requests":3}
