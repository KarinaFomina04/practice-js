/* 📌 Задача 949. Создай generic-функцию обработки ReadonlyMap с сохранением типа ключей. Стратегия вычисления: верни минимум каждого суффикса; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  let minimum = Infinity; const result: number[] = []; for (let i = items.length - 1; i >= 0; i--) { minimum = Math.min(minimum, items[i]!); result[i] = minimum; } return result;
}

function mapValues<K, A, B>(source: ReadonlyMap<K, A>, map: (value: A) => B): Map<K, B> {
  return new Map([...source].map(([key, value]) => [key, map(value)]));
}

console.log(JSON.stringify([...mapValues(new Map([['a', [3, -1, 3, 0]], ['b', []]]), compute)])); // Вывод 1: [["a",[-1,-1,0,0]],["b",[]]]
console.log(JSON.stringify([...mapValues(new Map<number, number[]>(), compute)])); // Вывод 2: []
console.log(JSON.stringify([...mapValues(new Map([[1, [1, 2]]]), compute)])); // Вывод 3: [[1,[1,2]]]

export {};
