/* 📌 Задача 903. Создай типизированный класс хранилища стратегий с ключами из union; исполни стратегию через keyof. Стратегия вычисления: сожми последовательные целые в отсортированный список границ интервалов; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result: number[] = []; for (let i = 0; i < sorted.length;) { const first = sorted[i]!; let last = first; while (i + 1 < sorted.length && sorted[i + 1] === last + 1) last = sorted[++i]!; result.push(first, last); i++; } return result;
}

type Strategies = { main: (items: readonly number[]) => number[]; reversed: (items: readonly number[]) => number[] };
class Registry {
  constructor(private readonly strategies: Strategies) {}
  run(key: keyof Strategies, items: readonly number[]): number[] { return this.strategies[key](items); }
}
const registry = new Registry({main: compute, reversed: items => compute([...items].reverse())});

console.log(JSON.stringify(registry.run('main', [3, -1, 3, 0]))); // Вывод 1: [-1,0,3,3]
console.log(JSON.stringify(registry.run('reversed', [3, -1, 3, 0]))); // Вывод 2: [-1,0,3,3]
console.log(JSON.stringify(registry.run('main', []))); // Вывод 3: []

export {};
