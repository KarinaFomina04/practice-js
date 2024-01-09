/* 📌 Задача 943. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: верни минимум каждого суффикса; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  let minimum = Infinity; const result: number[] = []; for (let i = items.length - 1; i >= 0; i--) { minimum = Math.min(minimum, items[i]!); result[i] = minimum; } return result;
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [-1,-1,0,0]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [-1,-1,-1,3]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
