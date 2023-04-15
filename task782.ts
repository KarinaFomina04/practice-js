/* 📌 Задача 782. Создай generic-функцию обработки nullable-значения с сохранением null. Стратегия вычисления: отсортируй копию по возрастанию; входной массив не изменяй. Уровень: Junior. */

function compute(items: readonly number[]): number[] {
  return [...items].sort((a, b) => a - b);
}

function mapNullable<A, B>(value: A | null, map: (value: A) => B): B | null {
  return value === null ? null : map(value);
}

console.log(JSON.stringify(mapNullable([3, -1, 3, 0], compute))); // Вывод 1: [-1,0,3,3]
console.log(JSON.stringify(mapNullable([], compute))); // Вывод 2: []
console.log(JSON.stringify(mapNullable<readonly number[], number[]>(null, compute))); // Вывод 3: null

export {};
