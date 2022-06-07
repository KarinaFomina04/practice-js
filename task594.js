/* 📌 Задача 594. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: найди все позиции нулей. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  return items.flatMap((x, index) => x === 0 ? [index] : []);
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

console.log(JSON.stringify(events)); // Вывод 1: [[3]]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [[3]]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: []
