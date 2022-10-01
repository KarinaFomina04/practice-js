/* 📌 Задача 664. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: найди нижнюю медиану и абсолютные отклонения от неё, для пустого верни null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  if (!items.length) return null; const sorted = [...items].sort((a, b) => a - b), median = sorted[Math.floor((items.length - 1) / 2)]; return {median, deviations: items.map(x => Math.abs(x - median))};
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

console.log(JSON.stringify(events)); // Вывод 1: [{"median":0,"deviations":[3,1,3,0]}]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [{"median":0,"deviations":[3,1,3,0]}]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: {"median":1,"deviations":[0,1]}
