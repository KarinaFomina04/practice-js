/* 📌 Задача 844. Создай generic mapped type и функцию преобразования полей Record, сохраняя объединение ключей. Стратегия вычисления: верни плотные ранги значений начиная с нуля; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const sorted = [...new Set(items)].sort((a, b) => a - b); const ranks = new Map(sorted.map((x, i) => [x, i])); return items.map(x => ranks.get(x)!);
}

type Mapped<K extends string, T> = { [P in K]: T };
function mapFields<K extends string, A, B>(record: Mapped<K, A>, map: (value: A) => B): Mapped<K, B> {
  const result = {} as Mapped<K, B>;
  for (const key in record) result[key] = map(record[key]);
  return result;
}

console.log(JSON.stringify(mapFields({first: [3, -1, 3, 0], second: []}, compute))); // Вывод 1: {"first":[2,0,2,1],"second":[]}
console.log(JSON.stringify(mapFields({empty: []}, compute))); // Вывод 2: {"empty":[]}
console.log(JSON.stringify(mapFields({single: [1]}, compute))); // Вывод 3: {"single":[0]}

export {};
