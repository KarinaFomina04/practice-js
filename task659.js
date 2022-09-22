/* 📌 Задача 659. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: расположи значения по убыванию частоты, при равенстве по возрастанию числа. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const counts = new Map(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a) || a - b);
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
