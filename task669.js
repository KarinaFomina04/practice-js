/* 📌 Задача 669. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: найди нижнюю медиану и абсолютные отклонения от неё, для пустого верни null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  if (!items.length) return null; const sorted = [...items].sort((a, b) => a - b), median = sorted[Math.floor((items.length - 1) / 2)]; return {median, deviations: items.map(x => Math.abs(x - median))};
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

console.log(JSON.stringify([...source])); // Вывод 1: [{"median":0,"deviations":[3,1,3,0]},null]
console.log(JSON.stringify([...source])); // Вывод 2: [{"median":0,"deviations":[3,1,3,0]},null]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
