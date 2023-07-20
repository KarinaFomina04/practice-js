/* 📌 Задача 838. Создай generic-класс адаптера с интерфейсом Reader и приватным снимком массива; адаптер должен возвращать результат стратегии. Стратегия вычисления: замени серии равных соседей длинами; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const result: number[] = []; for (let i = 0; i < items.length;) { let j = i + 1; while (j < items.length && items[j] === items[i]) j++; result.push(j - i); i = j; } return result;
}

interface Reader<T> { read(): T }
class Adapter<T> implements Reader<T> {
  private readonly snapshot: number[];
  constructor(items: readonly number[], private readonly map: (items: readonly number[]) => T) { this.snapshot = [...items]; }
  read(): T { return this.map(this.snapshot); }
}
const original = [3, -1, 3, 0], adapter = new Adapter(original, compute);
original.push(99);

console.log(JSON.stringify(adapter.read())); // Вывод 1: [1,1,1,1]
console.log(JSON.stringify(new Adapter([], compute).read())); // Вывод 2: []
console.log(JSON.stringify(new Adapter([1, 2], compute).read())); // Вывод 3: [1,1]

export {};
