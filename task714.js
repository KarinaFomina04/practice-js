/* 📌 Задача 714. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: составь отчёт о сумме, количестве и среднем, для пустого среднего используй null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const sum = items.reduce((a, b) => a + b, 0); return {sum, count: items.length, average: items.length ? sum / items.length : null};
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

console.log(JSON.stringify(events)); // Вывод 1: [{"sum":5,"count":4,"average":1.25}]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [{"sum":5,"count":4,"average":1.25}]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: {"sum":3,"count":2,"average":1.5}
