/* 📌 Задача 749. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: построй нечётные по частоте значения через переключение членства в Set. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const odd = new Set(); for (const x of items) { if (odd.has(x)) odd.delete(x); else odd.add(x); } return [...odd];
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

console.log(JSON.stringify([...source])); // Вывод 1: [[-1,0],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[-1,0],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
