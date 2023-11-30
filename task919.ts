/* 📌 Задача 919. Создай generic-функцию обработки ReadonlyMap с сохранением типа ключей. Стратегия вычисления: верни длину LIS каждого префикса; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const tails: number[] = [], result: number[] = []; for (const x of items) { let left = 0, right = tails.length; while (left < right) { const middle = (left + right) >>> 1; if (tails[middle]! < x) left = middle + 1; else right = middle; } tails[left] = x; result.push(tails.length); } return result;
}

function mapValues<K, A, B>(source: ReadonlyMap<K, A>, map: (value: A) => B): Map<K, B> {
  return new Map([...source].map(([key, value]) => [key, map(value)]));
}

console.log(JSON.stringify([...mapValues(new Map([['a', [3, -1, 3, 0]], ['b', []]]), compute)])); // Вывод 1: [["a",[1,1,2,2]],["b",[]]]
console.log(JSON.stringify([...mapValues(new Map<number, number[]>(), compute)])); // Вывод 2: []
console.log(JSON.stringify([...mapValues(new Map([[1, [1, 2]]]), compute)])); // Вывод 3: [[1,[1,2]]]

export {};
