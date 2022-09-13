/* 📌 Задача 654. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: расположи значения по убыванию частоты, при равенстве по возрастанию числа. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const counts = new Map(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a) || a - b);
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

console.log(JSON.stringify(events)); // Вывод 1: [[3,-1,0]]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [[3,-1,0]]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: [1,2]
