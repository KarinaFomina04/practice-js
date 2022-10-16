/* 📌 Задача 673. Создай класс с историей вычислений и отменой последнего результата; отмена пустой истории возвращает null. Вычисление: создай индекс следующего появления каждого значения, при отсутствии используй null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const next = new Map(), result = Array(items.length).fill(null); for (let i = items.length - 1; i >= 0; i--) { result[i] = next.get(items[i]) ?? null; next.set(items[i], i); } return result;
}

class History {
  #values = [];
  execute(items) { const value = compute(items); this.#values.push(value); return value; }
  undo() { return this.#values.length ? this.#values.pop() : null; }
  get size() { return this.#values.length; }
}
const history = new History();

console.log(JSON.stringify(({value: history.execute([3, -1, 3, 0]), size: history.size}))); // Вывод 1: {"value":[2,null,null,null],"size":1}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 2: {"value":[2,null,null,null],"size":0}
console.log(JSON.stringify(({value: history.undo(), size: history.size}))); // Вывод 3: {"value":null,"size":0}
