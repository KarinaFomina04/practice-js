/* 📌 Задача 788. Создай generic-класс адаптера с интерфейсом Reader и приватным снимком массива; адаптер должен возвращать результат стратегии. Стратегия вычисления: отсортируй копию по возрастанию; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  return [...items].sort((a, b) => a - b);
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
