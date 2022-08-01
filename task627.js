/* 📌 Задача 627. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: построй разности соседних значений. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.slice(1).map((x, i) => x - items[i]);
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":[-4,4,-3],"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":[],"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":[1],"requests":3}
