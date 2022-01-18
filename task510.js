/* 📌 Задача 510. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: отсортируй копию массива чисел по возрастанию. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return [...items].sort((a, b) => a - b);
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [-1,0,3,3]
console.log(JSON.stringify(copy.run())); // Вывод 2: [-1,0,3,3]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
