/* 📌 Задача 908. Создай generic-класс адаптера с интерфейсом Reader и приватным снимком массива; адаптер должен возвращать результат стратегии. Стратегия вычисления: сожми последовательные целые в отсортированный список границ интервалов; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result: number[] = []; for (let i = 0; i < sorted.length;) { const first = sorted[i]!; let last = first; while (i + 1 < sorted.length && sorted[i + 1] === last + 1) last = sorted[++i]!; result.push(first, last); i++; } return result;
}

interface Reader<T> { read(): T }
class Adapter<T> implements Reader<T> {
  private readonly snapshot: number[];
  constructor(items: readonly number[], private readonly map: (items: readonly number[]) => T) { this.snapshot = [...items]; }
  read(): T { return this.map(this.snapshot); }
}
const original = [3, -1, 3, 0], adapter = new Adapter(original, compute);
original.push(99);

console.log(JSON.stringify(adapter.read())); // Вывод 1: [-1,0,3,3]
console.log(JSON.stringify(new Adapter([], compute).read())); // Вывод 2: []
console.log(JSON.stringify(new Adapter([1, 2], compute).read())); // Вывод 3: [1,2]

export {};
