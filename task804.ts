/* 📌 Задача 804. Создай generic mapped type и функцию преобразования полей Record, сохраняя объединение ключей. Стратегия вычисления: верни максимумы префиксов; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  let maximum = -Infinity; return items.map(x => maximum = Math.max(maximum, x));
}

type Mapped<K extends string, T> = { [P in K]: T };
function mapFields<K extends string, A, B>(record: Mapped<K, A>, map: (value: A) => B): Mapped<K, B> {
  const result = {} as Mapped<K, B>;
  for (const key in record) result[key] = map(record[key]);
  return result;
}

console.log(JSON.stringify(mapFields({first: [3, -1, 3, 0], second: []}, compute))); // Вывод 1: {"first":[3,3,3,3],"second":[]}
console.log(JSON.stringify(mapFields({empty: []}, compute))); // Вывод 2: {"empty":[]}
console.log(JSON.stringify(mapFields({single: [1]}, compute))); // Вывод 3: {"single":[1]}

export {};
