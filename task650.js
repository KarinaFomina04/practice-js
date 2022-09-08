/* 📌 Задача 650. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: построй список объектов с индексом, значением и квадратом. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.map((value, index) => ({index, value, square: value * value}));
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}]
console.log(JSON.stringify(copy.run())); // Вывод 2: [{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
