/* 📌 Задача 730. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: построй границы серий одинакового знака как полуинтервалы индексов. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = []; for (let i = 0; i < items.length; i++) { if (i === 0 || Math.sign(items[i]) !== Math.sign(items[i - 1])) result.push([i, i + 1]); else result.at(-1)[1] = i + 1; } return result;
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [[0,1],[1,2],[2,3],[3,4]]
console.log(JSON.stringify(copy.run())); // Вывод 2: [[0,1],[1,2],[2,3],[3,4]]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
