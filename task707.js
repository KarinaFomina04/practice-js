/* 📌 Задача 707. Создай объект сервиса с методом, использующим this; проверь bind, call и apply на независимых вызовах. Вычисление: построй уникальные неупорядоченные пары разных позиций. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = [], seen = new Set(); for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) { const pair = [items[i], items[j]].sort((a, b) => a - b), key = JSON.stringify(pair); if (!seen.has(key)) { seen.add(key); result.push(pair); } } return result;
}

const service = {
  requests: 0,
  run(items) { this.requests++; return {value: compute(items), requests: this.requests}; }
};
const bound = service.run.bind(service);

console.log(JSON.stringify(bound([3, -1, 3, 0]))); // Вывод 1: {"value":[[-1,3],[3,3],[0,3],[-1,0]],"requests":1}
console.log(JSON.stringify(service.run.call(service, []))); // Вывод 2: {"value":[],"requests":2}
console.log(JSON.stringify(service.run.apply(service, [[1, 2]]))); // Вывод 3: {"value":[[1,2]],"requests":3}
