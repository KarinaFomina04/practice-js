/* 📌 Задача 502. Создай генератор обработки пакетов; он должен обрабатывать по одному массиву при каждом next и корректно завершаться. Вычисление: отсортируй копию массива чисел по возрастанию. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return [...items].sort((a, b) => a - b);
}

function* processBatches(batches) {
  for (const items of batches) yield compute(items);
}
const iterator = processBatches([[3, -1, 3, 0], []]);

console.log(JSON.stringify(iterator.next())); // Вывод 1: {"value":[-1,0,3,3],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 2: {"value":[],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 3: {"done":true}
