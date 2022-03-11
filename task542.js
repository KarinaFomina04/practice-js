/* 📌 Задача 542. Создай генератор обработки пакетов; он должен обрабатывать по одному массиву при каждом next и корректно завершаться. Вычисление: сгруппируй числа по знаку. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = {negative: [], zero: [], positive: []}; for (const x of items) result[x < 0 ? "negative" : x > 0 ? "positive" : "zero"].push(x); return result;
}

function* processBatches(batches) {
  for (const items of batches) yield compute(items);
}
const iterator = processBatches([[3, -1, 3, 0], []]);

console.log(JSON.stringify(iterator.next())); // Вывод 1: {"value":{"negative":[-1],"zero":[0],"positive":[3,3]},"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 2: {"value":{"negative":[],"zero":[],"positive":[]},"done":false}
console.log(JSON.stringify(iterator.next())); // Вывод 3: {"done":true}
