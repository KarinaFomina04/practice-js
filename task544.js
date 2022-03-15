/* 📌 Задача 544. Создай обработчик пакетов с подписками на результат; возвращаемая отписка должна удалять слушателя. Вычисление: сгруппируй числа по знаку. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const result = {negative: [], zero: [], positive: []}; for (const x of items) result[x < 0 ? "negative" : x > 0 ? "positive" : "zero"].push(x); return result;
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

console.log(JSON.stringify(events)); // Вывод 1: [{"negative":[-1],"zero":[0],"positive":[3,3]}]
console.log(JSON.stringify((unsubscribe(), processor.run([]), events))); // Вывод 2: [{"negative":[-1],"zero":[0],"positive":[3,3]}]
console.log(JSON.stringify(processor.run([1, 2]))); // Вывод 3: {"negative":[],"zero":[],"positive":[1,2]}
