/* 📌 Задача 690. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: вычисли для каждого индекса сумму всех остальных элементов. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sum = items.reduce((a, b) => a + b, 0); return items.map(x => sum - x);
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [2,6,2,5]
console.log(JSON.stringify(copy.run())); // Вывод 2: [2,6,2,5]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
