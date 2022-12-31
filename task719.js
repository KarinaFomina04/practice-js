/* 📌 Задача 719. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: составь отчёт о сумме, количестве и среднем, для пустого среднего используй null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sum = items.reduce((a, b) => a + b, 0); return {sum, count: items.length, average: items.length ? sum / items.length : null};
}

function batches(values) {
  return {
    [Symbol.iterator]() {
      let index = 0;
      return { next() { return index < values.length ? {value: compute(values[index++]), done: false} : {done: true}; } };
    }
  };
}
const source = batches([[3, -1, 3, 0], []]);

console.log(JSON.stringify([...source])); // Вывод 1: [{"sum":5,"count":4,"average":1.25},{"sum":0,"count":0,"average":null}]
console.log(JSON.stringify([...source])); // Вывод 2: [{"sum":5,"count":4,"average":1.25},{"sum":0,"count":0,"average":null}]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
