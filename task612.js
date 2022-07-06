/* 📌 Задача 612. Создай генератор обработки пакетов; он должен обрабатывать по одному массиву при каждом next и корректно завершаться. Вычисление: стабильно раздели массив на чётные и нечётные значения. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return [items.filter(x => x % 2 === 0), items.filter(x => x % 2 !== 0)];
}

function* processBatches(batches) {
  for (const items of batches) yield compute(items);
}
const iterator = processBatches([[3, -1, 3, 0], []]);

console.log(JSON.stringify(iterator.next())); // Вывод 1: {"value":[[0],[3,-1,3]],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 2: {"value":[[],[]],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 3: {"done":true}
