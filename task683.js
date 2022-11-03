/* 📌 Задача 683. Создай класс с историей вычислений и отменой последнего результата; отмена пустой истории возвращает null. Вычисление: вычисли для каждого индекса сумму всех остальных элементов. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const sum = items.reduce((a, b) => a + b, 0); return items.map(x => sum - x);
}

class History {
  #values = [];
  execute(items) { const value = compute(items); this.#values.push(value); return value; }
  undo() { return this.#values.length ? this.#values.pop() : null; }
  get size() { return this.#values.length; }
}
const history = new History();

console.log(JSON.stringify(({value: history.execute([3, -1, 3, 0]), size: history.size}))); // Вывод 1: {"value":[2,6,2,5],"size":1}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 2: {"value":[2,6,2,5],"size":0}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 3: {"value":null,"size":0}
