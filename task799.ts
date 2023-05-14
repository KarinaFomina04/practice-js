/* 📌 Задача 799. Создай generic-функцию обработки ReadonlyMap с сохранением типа ключей. Стратегия вычисления: оставь только значения с частотой один; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const counts = new Map<number, number>(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return items.filter(x => counts.get(x) === 1);
}

function mapValues<K, A, B>(source: ReadonlyMap<K, A>, map: (value: A) => B): Map<K, B> {
  return new Map([...source].map(([key, value]) => [key, map(value)]));
}

console.log(JSON.stringify([...mapValues(new Map([['a', [3, -1, 3, 0]], ['b', []]]), compute)])); // Вывод 1: [["a",[-1,0]],["b",[]]]
console.log(JSON.stringify([...mapValues(new Map<number, number[]>(), compute)])); // Вывод 2: []
console.log(JSON.stringify([...mapValues(new Map([[1, [1, 2]]]), compute)])); // Вывод 3: [[1,[1,2]]]

export {};
