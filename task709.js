/* 📌 Задача 709. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: построй уникальные неупорядоченные пары разных позиций. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = [], seen = new Set(); for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) { const pair = [items[i], items[j]].sort((a, b) => a - b), key = JSON.stringify(pair); if (!seen.has(key)) { seen.add(key); result.push(pair); } } return result;
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

console.log(JSON.stringify([...source])); // Вывод 1: [[[-1,3],[3,3],[0,3],[-1,0]],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[[-1,3],[3,3],[0,3],[-1,0]],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
