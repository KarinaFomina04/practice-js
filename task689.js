/* 📌 Задача 689. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: вычисли для каждого индекса сумму всех остальных элементов. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sum = items.reduce((a, b) => a + b, 0); return items.map(x => sum - x);
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

console.log(JSON.stringify([...source])); // Вывод 1: [[2,6,2,5],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[2,6,2,5],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
