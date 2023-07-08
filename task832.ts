/* 📌 Задача 832. Создай generic-функцию обработки nullable-значения с сохранением null. Стратегия вычисления: замени серии равных соседей длинами; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const result: number[] = []; for (let i = 0; i < items.length;) { let j = i + 1; while (j < items.length && items[j] === items[i]) j++; result.push(j - i); i = j; } return result;
}

function mapNullable<A, B>(value: A | null, map: (value: A) => B): B | null {
  return value === null ? null : map(value);
}

console.log(JSON.stringify(mapNullable([3, -1, 3, 0], compute))); // Вывод 1: [1,1,1,1]
console.log(JSON.stringify(mapNullable([], compute))); // Вывод 2: []
console.log(JSON.stringify(mapNullable<readonly number[], number[]>(null, compute))); // Вывод 3: null

export {};
