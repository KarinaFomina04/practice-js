/* 📌 Задача 923. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: верни сумму всех остальных значений для каждой позиции; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const sum = items.reduce((a, b) => a + b, 0); return items.map(x => sum - x);
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [2,6,2,5]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [5,2,6,2]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
