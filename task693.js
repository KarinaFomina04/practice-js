/* 📌 Задача 693. Создай класс с историей вычислений и отменой последнего результата; отмена пустой истории возвращает null. Вычисление: преобразуй массив в непересекающиеся интервалы последовательных целых после устранения дублей. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result = []; for (const x of sorted) { if (result.length && result.at(-1)[1] + 1 === x) result.at(-1)[1] = x; else result.push([x, x]); } return result;
}

class History {
  #values = [];
  execute(items) { const value = compute(items); this.#values.push(value); return value; }
  undo() { return this.#values.length ? this.#values.pop() : null; }
  get size() { return this.#values.length; }
}
const history = new History();

console.log(JSON.stringify(({value: history.execute([3, -1, 3, 0]), size: history.size}))); // Вывод 1: {"value":[[-1,0],[3,3]],"size":1}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 2: {"value":[[-1,0],[3,3]],"size":0}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 3: {"value":null,"size":0}
