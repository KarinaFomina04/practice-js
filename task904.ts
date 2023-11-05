/* 📌 Задача 904. Создай generic mapped type и функцию преобразования полей Record, сохраняя объединение ключей. Стратегия вычисления: сожми последовательные целые в отсортированный список границ интервалов; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result: number[] = []; for (let i = 0; i < sorted.length;) { const first = sorted[i]!; let last = first; while (i + 1 < sorted.length && sorted[i + 1] === last + 1) last = sorted[++i]!; result.push(first, last); i++; } return result;
}

type Mapped<K extends string, T> = { [P in K]: T };
function mapFields<K extends string, A, B>(record: Mapped<K, A>, map: (value: A) => B): Mapped<K, B> {
  const result = {} as Mapped<K, B>;
  for (const key in record) result[key] = map(record[key]);
  return result;
}

console.log(JSON.stringify(mapFields({first: [3, -1, 3, 0], second: []}, compute))); // Вывод 1: {"first":[-1,0,3,3],"second":[]}
console.log(JSON.stringify(mapFields({empty: []}, compute))); // Вывод 2: {"empty":[]}
console.log(JSON.stringify(mapFields({single: [1]}, compute))); // Вывод 3: {"single":[1,1]}

export {};
