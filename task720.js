/* 📌 Задача 720. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: составь отчёт о сумме, количестве и среднем, для пустого среднего используй null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const sum = items.reduce((a, b) => a + b, 0); return {sum, count: items.length, average: items.length ? sum / items.length : null};
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: {"sum":5,"count":4,"average":1.25}
console.log(JSON.stringify(copy.run())); // Вывод 2: {"sum":5,"count":4,"average":1.25}
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: {"sum":0,"count":0,"average":null}
