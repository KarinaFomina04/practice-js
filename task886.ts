/* 📌 Задача 886. Создай типизированное событие start/data/end и исчерпывающий обработчик через never; вычисляй только data. Стратегия вычисления: верни длины возрастающих серий, заканчивающихся на каждой позиции; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  let run = 0; return items.map((x, i) => run = i > 0 && x > items[i - 1]! ? run + 1 : 1);
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
console.log(JSON.stringify(handle({kind: 'data', items: [3, -1, 3, 0]}))); // Вывод 2: [1,1,2,1]
console.log(JSON.stringify(handle({kind: 'end', count: 1}))); // Вывод 3: "обработано: 1"

export {};
