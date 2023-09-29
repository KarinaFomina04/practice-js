/* 📌 Задача 882. Создай generic-функцию обработки nullable-значения с сохранением null. Стратегия вычисления: верни длины возрастающих серий, заканчивающихся на каждой позиции; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  let run = 0; return items.map((x, i) => run = i > 0 && x > items[i - 1]! ? run + 1 : 1);
}

function mapNullable<A, B>(value: A | null, map: (value: A) => B): B | null {
  return value === null ? null : map(value);
}

console.log(JSON.stringify(mapNullable([3, -1, 3, 0], compute))); // Вывод 1: [1,1,2,1]
console.log(JSON.stringify(mapNullable([], compute))); // Вывод 2: []
console.log(JSON.stringify(mapNullable<readonly number[], number[]>(null, compute))); // Вывод 3: null

export {};
