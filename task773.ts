/* 📌 Задача 773. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: верни разности соседей; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  return items.slice(1).map((x, i) => x - items[i]!);
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [-4,4,-3]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [3,-4,4]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
