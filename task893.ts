/* 📌 Задача 893. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: верни расстояние до предыдущего такого же значения или минус один; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const last = new Map<number, number>(); return items.map((x, i) => { const previous = last.get(x); last.set(x, i); return previous === undefined ? -1 : i - previous; });
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [-1,-1,2,-1]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [-1,-1,-1,2]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
