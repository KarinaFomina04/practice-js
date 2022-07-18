/* 📌 Задача 619. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: стабильно раздели массив на чётные и нечётные значения. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return [items.filter(x => x % 2 === 0), items.filter(x => x % 2 !== 0)];
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

console.log(JSON.stringify([...source])); // Вывод 1: [[[0],[3,-1,3]],[[],[]]]
console.log(JSON.stringify([...source])); // Вывод 2: [[[0],[3,-1,3]],[[],[]]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
