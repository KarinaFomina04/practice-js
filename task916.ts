/* 📌 Задача 916. Создай типизированное событие start/data/end и исчерпывающий обработчик через never; вычисляй только data. Стратегия вычисления: верни длину LIS каждого префикса; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const tails: number[] = [], result: number[] = []; for (const x of items) { let left = 0, right = tails.length; while (left < right) { const middle = (left + right) >>> 1; if (tails[middle]! < x) left = middle + 1; else right = middle; } tails[left] = x; result.push(tails.length); } return result;
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
console.log(JSON.stringify(handle({kind: 'data', items: [3, -1, 3, 0]}))); // Вывод 2: [1,1,2,2]
console.log(JSON.stringify(handle({kind: 'end', count: 1}))); // Вывод 3: "обработано: 1"

export {};
