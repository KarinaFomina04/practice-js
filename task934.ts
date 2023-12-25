/* 📌 Задача 934. Создай generic mapped type и функцию преобразования полей Record, сохраняя объединение ключей. Стратегия вычисления: верни отсортированные значения с нечётной частотой; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const odd = new Set<number>(); for (const x of items) { if (odd.has(x)) odd.delete(x); else odd.add(x); } return [...odd].sort((a, b) => a - b);
}

type Mapped<K extends string, T> = { [P in K]: T };
function mapFields<K extends string, A, B>(record: Mapped<K, A>, map: (value: A) => B): Mapped<K, B> {
  const result = {} as Mapped<K, B>;
  for (const key in record) result[key] = map(record[key]);
  return result;
}

console.log(JSON.stringify(mapFields({first: [3, -1, 3, 0], second: []}, compute))); // Вывод 1: {"first":[-1,0],"second":[]}
console.log(JSON.stringify(mapFields({empty: []}, compute))); // Вывод 2: {"empty":[]}
console.log(JSON.stringify(mapFields({single: [1]}, compute))); // Вывод 3: {"single":[1]}

export {};
