/* 📌 Задача 734. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: отранжируй значения соревнованием: одинаковые делят место и оставляют пропуски. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const sorted = [...items].sort((a, b) => b - a), ranks = new Map(); sorted.forEach((x, i) => { if (!ranks.has(x)) ranks.set(x, i + 1); }); return items.map(x => ranks.get(x));
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

console.log(JSON.stringify(events)); // Вывод 1: [[1,4,1,3]]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [[1,4,1,3]]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: [2,1]
