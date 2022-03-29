/* 📌 Задача 552. Создай генератор обработки пакетов; он должен обрабатывать по одному массиву при каждом next и корректно завершаться. Вычисление: рассчитай скользящее среднее полных окон длины два. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.slice(1).map((x, i) => (x + items[i]) / 2);
}

function* processBatches(batches) {
  for (const items of batches) yield compute(items);
}
const iterator = processBatches([[3, -1, 3, 0], []]);

console.log(JSON.stringify(iterator.next())); // Вывод 1: {"value":[1,1,1.5],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 2: {"value":[],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 3: {"done":true}
