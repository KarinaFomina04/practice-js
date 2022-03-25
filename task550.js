/* 📌 Задача 550. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: сгруппируй числа по знаку. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = {negative: [], zero: [], positive: []}; for (const x of items) result[x < 0 ? "negative" : x > 0 ? "positive" : "zero"].push(x); return result;
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: {"negative":[-1],"zero":[0],"positive":[3,3]}
console.log(JSON.stringify(copy.run())); // Вывод 2: {"negative":[-1],"zero":[0],"positive":[3,3]}
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: {"negative":[],"zero":[],"positive":[]}
