/* 📌 Задача 610. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: вычисли декартов квадрат массива в исходном порядке. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.flatMap(x => items.map(y => [x, y]));
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [[3,3],[3,-1],[3,3],[3,0],[-1,3],[-1,-1],[-1,3],[-1,0],[3,3],[3,-1],[3,3],[3,0],[0,3],[0,-1],[0,3],[0,0]]
console.log(JSON.stringify(copy.run())); // Вывод 2: [[3,3],[3,-1],[3,3],[3,0],[-1,3],[-1,-1],[-1,3],[-1,0],[3,3],[3,-1],[3,3],[3,0],[0,3],[0,-1],[0,3],[0,0]]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
