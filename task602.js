/* 📌 Задача 602. Создай генератор обработки пакетов; он должен обрабатывать по одному массиву при каждом next и корректно завершаться. Вычисление: вычисли декартов квадрат массива в исходном порядке. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.flatMap(x => items.map(y => [x, y]));
}

function* processBatches(batches) {
  for (const items of batches) yield compute(items);
}
const iterator = processBatches([[3, -1, 3, 0], []]);

console.log(JSON.stringify(iterator.next())); // Вывод 1: {"value":[[3,3],[3,-1],[3,3],[3,0],[-1,3],[-1,-1],[-1,3],[-1,0],[3,3],[3,-1],[3,3],[3,0],[0,3],[0,-1],[0,3],[0,0]],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 2: {"value":[],"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 3: {"done":true}
