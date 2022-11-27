/* 📌 Задача 699. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: преобразуй массив в непересекающиеся интервалы последовательных целых после устранения дублей. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result = []; for (const x of sorted) { if (result.length && result.at(-1)[1] + 1 === x) result.at(-1)[1] = x; else result.push([x, x]); } return result;
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

console.log(JSON.stringify([...source])); // Вывод 1: [[[-1,0],[3,3]],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[[-1,0],[3,3]],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
