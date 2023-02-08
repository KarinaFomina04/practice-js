/* 📌 Задача 742. Создай генератор обработки пакетов; он должен обрабатывать по одному массиву при каждом next и корректно завершаться. Вычисление: построй нечётные по частоте значения через переключение членства в Set. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const odd = new Set(); for (const x of items) { if (odd.has(x)) odd.delete(x); else odd.add(x); } return [...odd];
}

function* processBatches(batches) {
  for (const items of batches) yield compute(items);
}
const iterator = processBatches([[3, -1, 3, 0], []]);

console.log(JSON.stringify(iterator.next())); // Вывод 1: {"value":[-1,0],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 2: {"value":[],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 3: {"done":true}
