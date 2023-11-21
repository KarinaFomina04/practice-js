/* 📌 Задача 914. Создай generic mapped type и функцию преобразования полей Record, сохраняя объединение ключей. Стратегия вычисления: верни длину LIS каждого префикса; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const tails: number[] = [], result: number[] = []; for (const x of items) { let left = 0, right = tails.length; while (left < right) { const middle = (left + right) >>> 1; if (tails[middle]! < x) left = middle + 1; else right = middle; } tails[left] = x; result.push(tails.length); } return result;
}

type Mapped<K extends string, T> = { [P in K]: T };
function mapFields<K extends string, A, B>(record: Mapped<K, A>, map: (value: A) => B): Mapped<K, B> {
  const result = {} as Mapped<K, B>;
  for (const key in record) result[key] = map(record[key]);
  return result;
}

console.log(JSON.stringify(mapFields({first: [3, -1, 3, 0], second: []}, compute))); // Вывод 1: {"first":[1,1,2,2],"second":[]}
console.log(JSON.stringify(mapFields({empty: []}, compute))); // Вывод 2: {"empty":[]}
console.log(JSON.stringify(mapFields({single: [1]}, compute))); // Вывод 3: {"single":[1]}

export {};
