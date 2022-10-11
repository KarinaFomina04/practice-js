/* 📌 Задача 670. Создай класс снимка входа с приватным полем, методом вычисления и независимым клоном; последующее изменение исходного массива не влияет на снимок. Вычисление: найди нижнюю медиану и абсолютные отклонения от неё, для пустого верни null. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  if (!items.length) return null; const sorted = [...items].sort((a, b) => a - b), median = sorted[Math.floor((items.length - 1) / 2)]; return {median, deviations: items.map(x => Math.abs(x - median))};
}

class Snapshot {
  #items;
  constructor(items) { this.#items = [...items]; }
  run() { return compute(this.#items); }
  clone() { return new Snapshot(this.#items); }
}
const original = [3, -1, 3, 0], snapshot = new Snapshot(original), copy = snapshot.clone();
original.length = 0;

console.log(JSON.stringify(snapshot.run())); // Вывод 1: {"median":0,"deviations":[3,1,3,0]}
console.log(JSON.stringify(copy.run())); // Вывод 2: {"median":0,"deviations":[3,1,3,0]}
console.log(JSON.stringify(new Snapshot(original).run())); // Вывод 3: null
