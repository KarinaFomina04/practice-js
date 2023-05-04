/* 📌 Задача 793. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: оставь только значения с частотой один; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const counts = new Map<number, number>(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return items.filter(x => counts.get(x) === 1);
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [-1,0]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [0,-1]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
