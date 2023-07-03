/* 📌 Задача 829. Создай generic-функцию обработки ReadonlyMap с сохранением типа ключей. Стратегия вычисления: верни произведения остальных элементов без деления; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const result = items.map(() => 1); let product = 1; for (let i = 0; i < items.length; i++) { result[i] = product; product *= items[i]!; } product = 1; for (let i = items.length - 1; i >= 0; i--) { result[i] = result[i]! * product; product *= items[i]!; } return result;
}

function mapValues<K, A, B>(source: ReadonlyMap<K, A>, map: (value: A) => B): Map<K, B> {
  return new Map([...source].map(([key, value]) => [key, map(value)]));
}

console.log(JSON.stringify([...mapValues(new Map([['a', [3, -1, 3, 0]], ['b', []]]), compute)])); // Вывод 1: [["a",[0,0,0,-9]],["b",[]]]
console.log(JSON.stringify([...mapValues(new Map<number, number[]>(), compute)])); // Вывод 2: []
console.log(JSON.stringify([...mapValues(new Map([[1, [1, 2]]]), compute)])); // Вывод 3: [[1,[2,1]]]

export {};
