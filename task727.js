/* 📌 Задача 727. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: построй границы серий одинакового знака как полуинтервалы индексов. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = []; for (let i = 0; i < items.length; i++) { if (i === 0 || Math.sign(items[i]) !== Math.sign(items[i - 1])) result.push([i, i + 1]); else result.at(-1)[1] = i + 1; } return result;
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":[[0,1],[1,2],[2,3],[3,4]],"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":[],"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":[[0,2]],"requests":3}
