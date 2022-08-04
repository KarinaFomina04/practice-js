/* 📌 Задача 630. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: построй разности соседних значений. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.slice(1).map((x, i) => x - items[i]);
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [-4,4,-3]
console.log(JSON.stringify(copy.run())); // Вывод 2: [-4,4,-3]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
