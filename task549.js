/* 📌 Задача 549. Создай пользовательский iterable вычислений пакетов; каждый проход должен начинаться заново. Вычисление: сгруппируй числа по знаку. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = {negative: [], zero: [], positive: []}; for (const x of items) result[x < 0 ? "negative" : x > 0 ? "positive" : "zero"].push(x); return result;
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

console.log(JSON.stringify([...source])); // Вывод 1: [{"negative":[-1],"zero":[0],"positive":[3,3]},{"negative":[],"zero":[],"positive":[]}]
console.log(JSON.stringify([...source])); // Вывод 2: [{"negative":[-1],"zero":[0],"positive":[3,3]},{"negative":[],"zero":[],"positive":[]}]
console.log(JSON.stringify([...batches([])])); // Вывод 3: []
