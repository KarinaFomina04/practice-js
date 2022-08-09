/* 📌 Задача 632. Создай генератор обработки пакетов; он должен обрабатывать по одному массиву при каждом next и корректно завершаться. Вычисление: верни элементы с частотой ровно один. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const counts = new Map(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return items.filter(x => counts.get(x) === 1);
}

function* processBatches(batches) {
  for (const items of batches) yield compute(items);
}
const iterator = processBatches([[3, -1, 3, 0], []]);

console.log(JSON.stringify(iterator.next())); // Вывод 1: {"value":[-1,0],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 2: {"value":[],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 3: {"done":true}
