/* 📌 Задача 680. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: создай индекс следующего появления каждого значения, при отсутствии используй null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const next = new Map(), result = Array(items.length).fill(null); for (let i = items.length - 1; i >= 0; i--) { result[i] = next.get(items[i]) ?? null; next.set(items[i], i); } return result;
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: [2,null,null,null]
console.log(JSON.stringify(copy.run())); // Вывод 2: [2,null,null,null]
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: []
