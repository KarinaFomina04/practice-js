/* 📌 Задача 862. Создай generic-функцию обработки nullable-значения с сохранением null. Стратегия вычисления: стабильно перенеси нули в конец; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  return [...items.filter(x => x !== 0), ...items.filter(x => x === 0)];
}

function mapNullable<A, B>(value: A | null, map: (value: A) => B): B | null {
  return value === null ? null : map(value);
}

console.log(JSON.stringify(mapNullable([3, -1, 3, 0], compute))); // Вывод 1: [3,-1,3,0]
console.log(JSON.stringify(mapNullable([], compute))); // Вывод 2: []
console.log(JSON.stringify(mapNullable<readonly number[], number[]>(null, compute))); // Вывод 3: null

export {};
