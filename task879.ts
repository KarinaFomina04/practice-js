/* 📌 Задача 879. Создай generic-функцию обработки ReadonlyMap с сохранением типа ключей. Стратегия вычисления: верни абсолютные отклонения от нижней медианы; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  if (!items.length) return []; const sorted = [...items].sort((a, b) => a - b), median = sorted[Math.floor((sorted.length - 1) / 2)]!; return items.map(x => Math.abs(x - median));
}

function mapValues<K, A, B>(source: ReadonlyMap<K, A>, map: (value: A) => B): Map<K, B> {
  return new Map([...source].map(([key, value]) => [key, map(value)]));
}

console.log(JSON.stringify([...mapValues(new Map([['a', [3, -1, 3, 0]], ['b', []]]), compute)])); // Вывод 1: [["a",[3,1,3,0]],["b",[]]]
console.log(JSON.stringify([...mapValues(new Map<number, number[]>(), compute)])); // Вывод 2: []
console.log(JSON.stringify([...mapValues(new Map([[1, [1, 2]]]), compute)])); // Вывод 3: [[1,[0,1]]]

export {};
