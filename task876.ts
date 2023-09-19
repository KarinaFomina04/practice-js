/* 📌 Задача 876. Создай типизированное событие start/data/end и исчерпывающий обработчик через never; вычисляй только data. Стратегия вычисления: верни абсолютные отклонения от нижней медианы; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  if (!items.length) return []; const sorted = [...items].sort((a, b) => a - b), median = sorted[Math.floor((sorted.length - 1) / 2)]!; return items.map(x => Math.abs(x - median));
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
console.log(JSON.stringify(handle({kind: 'data', items: [3, -1, 3, 0]}))); // Вывод 2: [3,1,3,0]
console.log(JSON.stringify(handle({kind: 'end', count: 1}))); // Вывод 3: "обработано: 1"

export {};
