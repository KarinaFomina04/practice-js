/* 📌 Задача 813. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: верни суммы полных соседних пар; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const result: number[] = []; for (let i = 1; i < items.length; i += 2) result.push(items[i - 1]! + items[i]!); return result;
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [2,3]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [3,2]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
