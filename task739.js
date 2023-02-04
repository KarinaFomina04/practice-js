/* 📌 Задача 739. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: отранжируй значения соревнованием: одинаковые делят место и оставляют пропуски. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sorted = [...items].sort((a, b) => b - a), ranks = new Map(); sorted.forEach((x, i) => { if (!ranks.has(x)) ranks.set(x, i + 1); }); return items.map(x => ranks.get(x));
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

console.log(JSON.stringify([...source])); // Вывод 1: [[1,4,1,3],[]]
console.log(JSON.stringify([...source])); // Вывод 2: [[1,4,1,3],[]]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
