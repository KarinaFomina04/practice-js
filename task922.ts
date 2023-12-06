/* 📌 Задача 922. Создай generic-функцию обработки nullable-значения с сохранением null. Стратегия вычисления: верни сумму всех остальных значений для каждой позиции; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const sum = items.reduce((a, b) => a + b, 0); return items.map(x => sum - x);
}

function mapNullable<A, B>(value: A | null, map: (value: A) => B): B | null {
  return value === null ? null : map(value);
}

console.log(JSON.stringify(mapNullable([3, -1, 3, 0], compute))); // Вывод 1: [2,6,2,5]
console.log(JSON.stringify(mapNullable([], compute))); // Вывод 2: []
console.log(JSON.stringify(mapNullable<readonly number[], number[]>(null, compute))); // Вывод 3: null

export {};
