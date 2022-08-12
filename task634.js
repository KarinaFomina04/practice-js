/* 📌 Задача 634. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: верни элементы с частотой ровно один. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const counts = new Map(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return items.filter(x => counts.get(x) === 1);
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

console.log(JSON.stringify(events)); // Вывод 1: [[-1,0]]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [[-1,0]]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: [1,2]
