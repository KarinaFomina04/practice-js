/* 📌 Задача 589. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: сверни соседние одинаковые значения в пары значение-количество. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = []; for (const x of items) { if (result.length && result.at(-1)[0] === x) result.at(-1)[1]++; else result.push([x, 1]); } return result;
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

console.log(JSON.stringify([...source])); // Вывод 1: [[[3,1],[-1,1],[3,1],[0,1]],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[[3,1],[-1,1],[3,1],[0,1]],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
