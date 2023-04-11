/* 📌 Задача 779. Создай generic-функцию обработки ReadonlyMap с сохранением типа ключей. Стратегия вычисления: верни разности соседей; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  return items.slice(1).map((x, i) => x - items[i]!);
}

function mapValues<K, A, B>(source: ReadonlyMap<K, A>, map: (value: A) => B): Map<K, B> {
  return new Map([...source].map(([key, value]) => [key, map(value)]));
}

console.log(JSON.stringify([...mapValues(new Map([['a', [3, -1, 3, 0]], ['b', []]]), compute)])); // Вывод 1: [["a",[-4,4,-3]],["b",[]]]
console.log(JSON.stringify([...mapValues(new Map<number, number[]>(), compute)])); // Вывод 2: []
console.log(JSON.stringify([...mapValues(new Map([[1, [1, 2]]]), compute)])); // Вывод 3: [[1,[1]]]

export {};
