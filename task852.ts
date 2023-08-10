/* 📌 Задача 852. Создай generic-функцию обработки nullable-значения с сохранением null. Стратегия вычисления: верни индексы локальных строгих максимумов, не включая края; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const result: number[] = []; for (let i = 1; i + 1 < items.length; i++) if (items[i]! > items[i - 1]! && items[i]! > items[i + 1]!) result.push(i); return result;
}

function mapNullable<A, B>(value: A | null, map: (value: A) => B): B | null {
  return value === null ? null : map(value);
}

console.log(JSON.stringify(mapNullable([3, -1, 3, 0], compute))); // Вывод 1: [2]
console.log(JSON.stringify(mapNullable([], compute))); // Вывод 2: []
console.log(JSON.stringify(mapNullable<readonly number[], number[]>(null, compute))); // Вывод 3: null

export {};
