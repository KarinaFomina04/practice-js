/* 📌 Задача 590. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: сверни соседние одинаковые значения в пары значение-количество. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = []; for (const x of items) { if (result.length && result.at(-1)[0] === x) result.at(-1)[1]++; else result.push([x, 1]); } return result;
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [[3,1],[-1,1],[3,1],[0,1]]
console.log(JSON.stringify(copy.run())); // Вывод 2: [[3,1],[-1,1],[3,1],[0,1]]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
