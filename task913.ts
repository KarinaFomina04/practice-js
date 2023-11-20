/* 📌 Задача 913. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: верни длину LIS каждого префикса; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const tails: number[] = [], result: number[] = []; for (const x of items) { let left = 0, right = tails.length; while (left < right) { const middle = (left + right) >>> 1; if (tails[middle]! < x) left = middle + 1; else right = middle; } tails[left] = x; result.push(tails.length); } return result;
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [1,1,2,2]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [1,2,2,2]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
