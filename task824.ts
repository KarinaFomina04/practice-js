/* 📌 Задача 824. Создай generic mapped type и функцию преобразования полей Record, сохраняя объединение ключей. Стратегия вычисления: верни произведения остальных элементов без деления; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const result = items.map(() => 1); let product = 1; for (let i = 0; i < items.length; i++) { result[i] = product; product *= items[i]!; } product = 1; for (let i = items.length - 1; i >= 0; i--) { result[i] = result[i]! * product; product *= items[i]!; } return result;
}

type Mapped<K extends string, T> = { [P in K]: T };
function mapFields<K extends string, A, B>(record: Mapped<K, A>, map: (value: A) => B): Mapped<K, B> {
  const result = {} as Mapped<K, B>;
  for (const key in record) result[key] = map(record[key]);
  return result;
}

console.log(JSON.stringify(mapFields({first: [3, -1, 3, 0], second: []}, compute))); // Вывод 1: {"first":[0,0,0,-9],"second":[]}
console.log(JSON.stringify(mapFields({empty: []}, compute))); // Вывод 2: {"empty":[]}
console.log(JSON.stringify(mapFields({single: [1]}, compute))); // Вывод 3: {"single":[1]}

export {};
