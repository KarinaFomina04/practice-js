/* 📌 Задача 569. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: построй суммы префиксов. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  let total = 0; return items.map(x => total += x);
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

console.log(JSON.stringify([...source])); // Вывод 1: [[3,2,5,5],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[3,2,5,5],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
