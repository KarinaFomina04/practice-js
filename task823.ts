/* 📌 Задача 823. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: верни произведения остальных элементов без деления; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const result = items.map(() => 1); let product = 1; for (let i = 0; i < items.length; i++) { result[i] = product; product *= items[i]!; } product = 1; for (let i = items.length - 1; i >= 0; i--) { result[i] = result[i]! * product; product *= items[i]!; } return result;
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [0,0,0,-9]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [-9,0,0,0]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
