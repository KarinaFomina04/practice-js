/* 📌 Задача 679. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: создай индекс следующего появления каждого значения, при отсутствии используй null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const next = new Map(), result = Array(items.length).fill(null); for (let i = items.length - 1; i >= 0; i--) { result[i] = next.get(items[i]) ?? null; next.set(items[i], i); } return result;
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

console.log(JSON.stringify([...source])); // Вывод 1: [[2,null,null,null],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[2,null,null,null],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
