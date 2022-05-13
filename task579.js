/* 📌 Задача 579. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: вычисли минимум и максимум, для пустого массива верни null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  if (!items.length) return null; return items.reduce((r, x) => ({min: Math.min(r.min, x), max: Math.max(r.max, x)}), {min: items[0], max: items[0]});
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

console.log(JSON.stringify([...source])); // Вывод 1: [{"min":-1,"max":3},null]
console.log(JSON.stringify([...source])); // Вывод 2: [{"min":-1,"max":3},null]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
