/* 📌 Задача 643. Создай класс с историей вычислений и отменой последнего результата; отмена пустой истории возвращает null. Вычисление: построй список объектов с индексом, значением и квадратом. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  return items.map((value, index) => ({index, value, square: value * value}));
}

class History {
  #values = [];
  execute(items) { const value = compute(items); this.#values.push(value); return value; }
  undo() { return this.#values.length ? this.#values.pop() : null; }
  get size() { return this.#values.length; }
}
const history = new History();

console.log(JSON.stringify(({value: history.execute([3, -1, 3, 0]), size: history.size}))); // Вывод 1: {"value":[{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}],"size":1}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 2: {"value":[{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}],"size":0}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 3: {"value":null,"size":0}
