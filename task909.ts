/* 📌 Задача 909. Создай generic-функцию обработки ReadonlyMap с сохранением типа ключей. Стратегия вычисления: сожми последовательные целые в отсортированный список границ интервалов; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result: number[] = []; for (let i = 0; i < sorted.length;) { const first = sorted[i]!; let last = first; while (i + 1 < sorted.length && sorted[i + 1] === last + 1) last = sorted[++i]!; result.push(first, last); i++; } return result;
}

function mapValues<K, A, B>(source: ReadonlyMap<K, A>, map: (value: A) => B): Map<K, B> {
  return new Map([...source].map(([key, value]) => [key, map(value)]));
}

console.log(JSON.stringify([...mapValues(new Map([['a', [3, -1, 3, 0]], ['b', []]]), compute)])); // Вывод 1: [["a",[-1,0,3,3]],["b",[]]]
console.log(JSON.stringify([...mapValues(new Map<number, number[]>(), compute)])); // Вывод 2: []
console.log(JSON.stringify([...mapValues(new Map([[1, [1, 2]]]), compute)])); // Вывод 3: [[1,[1,2]]]

export {};
