/* 📌 Задача 570. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: построй суммы префиксов. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  let total = 0; return items.map(x => total += x);
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [3,2,5,5]
console.log(JSON.stringify(copy.run())); // Вывод 2: [3,2,5,5]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
