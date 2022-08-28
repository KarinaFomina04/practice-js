/* 📌 Задача 644. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: построй список объектов с индексом, значением и квадратом. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  return items.map((value, index) => ({index, value, square: value * value}));
}

function createProcessor() {
  const listeners = new Set();
  return {
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
    run(items) { const value = compute(items); for (const listener of [...listeners]) listener(value); return value; }
  };
}
const processor = createProcessor(), events = [];
const unsubscribe = processor.subscribe(value => events.push(value));
processor.run([3, -1, 3, 0]);

console.log(JSON.stringify(events)); // Вывод 1: [[{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}]]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [[{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}]]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: [{"index":0,"value":1,"square":1},{"index":1,"value":2,"square":4}]
