/* 📌 Задача 583. Создай класс с историей вычислений и отменой последнего результата; отмена пустой истории возвращает null. Вычисление: сверни соседние одинаковые значения в пары значение-количество. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const result = []; for (const x of items) { if (result.length && result.at(-1)[0] === x) result.at(-1)[1]++; else result.push([x, 1]); } return result;
}

class History {
  #values = [];
  execute(items) { const value = compute(items); this.#values.push(value); return value; }
  undo() { return this.#values.length ? this.#values.pop() : null; }
  get size() { return this.#values.length; }
}
const history = new History();

console.log(JSON.stringify(({value: history.execute([3, -1, 3, 0]), size: history.size}))); // Вывод 1: {"value":[[3,1],[-1,1],[3,1],[0,1]],"size":1}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 2: {"value":[[3,1],[-1,1],[3,1],[0,1]],"size":0}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 3: {"value":null,"size":0}
