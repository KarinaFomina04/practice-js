/* 📌 Задача 674. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: создай индекс следующего появления каждого значения, при отсутствии используй null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const next = new Map(), result = Array(items.length).fill(null); for (let i = items.length - 1; i >= 0; i--) { result[i] = next.get(items[i]) ?? null; next.set(items[i], i); } return result;
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

console.log(JSON.stringify(events)); // Вывод 1: [[2,null,null,null]]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [[2,null,null,null]]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: [null,null]
