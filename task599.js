/* 📌 Задача 599. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: найди все позиции нулей. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.flatMap((x, index) => x === 0 ? [index] : []);
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

console.log(JSON.stringify([...source])); // Вывод 1: [[3],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[3],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
