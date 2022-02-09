/* 📌 Задача 524. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: разбей массив на полные и неполные пары. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const result = []; for (let i = 0; i < items.length; i += 2) result.push(items.slice(i, i + 2)); return result;
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

console.log(JSON.stringify(events)); // Вывод 1: [[[3,-1],[3,0]]]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [[[3,-1],[3,0]]]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: [[1,2]]
