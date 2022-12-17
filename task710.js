/* 📌 Задача 710. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: построй уникальные неупорядоченные пары разных позиций. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = [], seen = new Set(); for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) { const pair = [items[i], items[j]].sort((a, b) => a - b), key = JSON.stringify(pair); if (!seen.has(key)) { seen.add(key); result.push(pair); } } return result;
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [[-1,3],[3,3],[0,3],[-1,0]]
console.log(JSON.stringify(copy.run())); // Вывод 2: [[-1,3],[3,3],[0,3],[-1,0]]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
