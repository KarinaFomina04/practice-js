/* 📌 Задача 772. Создай generic-функцию обработки nullable-значения с сохранением null. Стратегия вычисления: верни разности соседей; входной массив не изменяй. Уровень: Junior. */

function compute(items: readonly number[]): number[] {
  return items.slice(1).map((x, i) => x - items[i]!);
}

function mapNullable<A, B>(value: A | null, map: (value: A) => B): B | null {
  return value === null ? null : map(value);
}

console.log(JSON.stringify(mapNullable([3, -1, 3, 0], compute))); // Вывод 1: [-4,4,-3]
console.log(JSON.stringify(mapNullable([], compute))); // Вывод 2: []
console.log(JSON.stringify(mapNullable<readonly number[], number[]>(null, compute))); // Вывод 3: null

export {};
