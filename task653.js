/* 📌 Задача 653. Создай класс с историей вычислений и отменой последнего результата; отмена пустой истории возвращает null. Вычисление: расположи значения по убыванию частоты, при равенстве по возрастанию числа. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const counts = new Map(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a) || a - b);
}

class History {
  #values = [];
  execute(items) { const value = compute(items); this.#values.push(value); return value; }
  undo() { return this.#values.length ? this.#values.pop() : null; }
  get size() { return this.#values.length; }
}
const history = new History();

console.log(JSON.stringify(({value: history.execute([3, -1, 3, 0]), size: history.size}))); // Вывод 1: {"value":[3,-1,0],"size":1}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 2: {"value":[3,-1,0],"size":0}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 3: {"value":null,"size":0}
