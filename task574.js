/* 📌 Задача 574. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: вычисли минимум и максимум, для пустого массива верни null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  if (!items.length) return null; return items.reduce((r, x) => ({min: Math.min(r.min, x), max: Math.max(r.max, x)}), {min: items[0], max: items[0]});
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

console.log(JSON.stringify(events)); // Вывод 1: [{"min":-1,"max":3}]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [{"min":-1,"max":3}]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: {"min":1,"max":2}
