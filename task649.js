/* 📌 Задача 649. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: построй список объектов с индексом, значением и квадратом. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.map((value, index) => ({index, value, square: value * value}));
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

console.log(JSON.stringify([...source])); // Вывод 1: [[{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
