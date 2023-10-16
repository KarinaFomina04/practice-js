/* 📌 Задача 892. Создай generic-функцию обработки nullable-значения с сохранением null. Стратегия вычисления: верни расстояние до предыдущего такого же значения или минус один; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const last = new Map<number, number>(); return items.map((x, i) => { const previous = last.get(x); last.set(x, i); return previous === undefined ? -1 : i - previous; });
}

function mapNullable<A, B>(value: A | null, map: (value: A) => B): B | null {
  return value === null ? null : map(value);
}

console.log(JSON.stringify(mapNullable([3, -1, 3, 0], compute))); // Вывод 1: [-1,-1,2,-1]
console.log(JSON.stringify(mapNullable([], compute))); // Вывод 2: []
console.log(JSON.stringify(mapNullable<readonly number[], number[]>(null, compute))); // Вывод 3: null

export {};
