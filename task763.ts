/* 📌 Задача 763. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: верни накопленные суммы; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  let total = 0; return items.map(x => total += x);
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [3,2,5,5]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [0,3,2,5]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
