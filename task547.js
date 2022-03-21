/* 📌 Задача 547. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: сгруппируй числа по знаку. Вход содержит конечные целые числа. Уровень: Junior. */

function compute(items) {
  const result = {negative: [], zero: [], positive: []}; for (const x of items) result[x < 0 ? "negative" : x > 0 ? "positive" : "zero"].push(x); return result;
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":{"negative":[-1],"zero":[0],"positive":[3,3]},"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":{"negative":[],"zero":[],"positive":[]},"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":{"negative":[],"zero":[],"positive":[1,2]},"requests":3}
