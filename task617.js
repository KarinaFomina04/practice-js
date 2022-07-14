/* 📌 Задача 617. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: стабильно раздели массив на чётные и нечётные значения. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return [items.filter(x => x % 2 === 0), items.filter(x => x % 2 !== 0)];
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":[[0],[3,-1,3]],"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":[[],[]],"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":[[2],[1]],"requests":3}
