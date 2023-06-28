/* 📌 Задача 826. Создай типизированное событие start/data/end и исчерпывающий обработчик через never; вычисляй только data. Стратегия вычисления: верни произведения остальных элементов без деления; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const result = items.map(() => 1); let product = 1; for (let i = 0; i < items.length; i++) { result[i] = product; product *= items[i]!; } product = 1; for (let i = items.length - 1; i >= 0; i--) { result[i] = result[i]! * product; product *= items[i]!; } return result;
}

type Event = {kind: 'start'} | {kind: 'data'; items: readonly number[]} | {kind: 'end'; count: number};
function handle(event: Event): number[] | string {
  switch (event.kind) {
    case 'start': return 'начало';
    case 'data': return compute(event.items);
    case 'end': return `обработано: ${event.count}`;
    default: { const unreachable: never = event; return unreachable; }
  }
}

console.log(JSON.stringify(handle({kind: 'start'}))); // Вывод 1: "начало"
console.log(JSON.stringify(handle({kind: 'data', items: [3, -1, 3, 0]}))); // Вывод 2: [0,0,0,-9]
console.log(JSON.stringify(handle({kind: 'end', count: 1}))); // Вывод 3: "обработано: 1"

export {};
