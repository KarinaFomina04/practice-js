/* 📌 Задача 519. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: устрани дубли с сохранением порядка. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return [...new Set(items)];
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

console.log(JSON.stringify([...source])); // Вывод 1: [[3,-1,0],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[3,-1,0],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
