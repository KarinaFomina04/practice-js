/* 📌 Задача 712. Создай генератор обработки пакетов; он должен обрабатывать по одному массиву при каждом next и корректно завершаться. Вычисление: составь отчёт о сумме, количестве и среднем, для пустого среднего используй null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sum = items.reduce((a, b) => a + b, 0); return {sum, count: items.length, average: items.length ? sum / items.length : null};
}

function* processBatches(batches) {
  for (const items of batches) yield compute(items);
}
const iterator = processBatches([[3, -1, 3, 0], []]);

console.log(JSON.stringify(iterator.next())); // Вывод 1: {"value":{"sum":5,"count":4,"average":1.25},"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 2: {"value":{"sum":0,"count":0,"average":null},"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 3: {"done":true}
