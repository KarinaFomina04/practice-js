/* 📌 Задача 883. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: верни длины возрастающих серий, заканчивающихся на каждой позиции; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  let run = 0; return items.map((x, i) => run = i > 0 && x > items[i - 1]! ? run + 1 : 1);
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [1,1,2,1]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [1,2,1,2]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
