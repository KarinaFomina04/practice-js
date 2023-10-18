/* 📌 Задача 894. Создай generic mapped type и функцию преобразования полей Record, сохраняя объединение ключей. Стратегия вычисления: верни расстояние до предыдущего такого же значения или минус один; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const last = new Map<number, number>(); return items.map((x, i) => { const previous = last.get(x); last.set(x, i); return previous === undefined ? -1 : i - previous; });
}

type Mapped<K extends string, T> = { [P in K]: T };
function mapFields<K extends string, A, B>(record: Mapped<K, A>, map: (value: A) => B): Mapped<K, B> {
  const result = {} as Mapped<K, B>;
  for (const key in record) result[key] = map(record[key]);
  return result;
}

console.log(JSON.stringify(mapFields({first: [3, -1, 3, 0], second: []}, compute))); // Вывод 1: {"first":[-1,-1,2,-1],"second":[]}
console.log(JSON.stringify(mapFields({empty: []}, compute))); // Вывод 2: {"empty":[]}
console.log(JSON.stringify(mapFields({single: [1]}, compute))); // Вывод 3: {"single":[-1]}

export {};
