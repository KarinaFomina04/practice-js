/* 📌 Задача 729. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: построй границы серий одинакового знака как полуинтервалы индексов. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = []; for (let i = 0; i < items.length; i++) { if (i === 0 || Math.sign(items[i]) !== Math.sign(items[i - 1])) result.push([i, i + 1]); else result.at(-1)[1] = i + 1; } return result;
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

console.log(JSON.stringify([...source])); // Вывод 1: [[[0,1],[1,2],[2,3],[3,4]],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[[0,1],[1,2],[2,3],[3,4]],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
