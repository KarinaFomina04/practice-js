/* 📌 Задача 937. Создай generic async map для PromiseLike через Awaited; обработай обычное значение и Promise с сохранением типа результата. Стратегия вычисления: верни отсортированные значения с нечётной частотой; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const odd = new Set<number>(); for (const x of items) { if (odd.has(x)) odd.delete(x); else odd.add(x); } return [...odd].sort((a, b) => a - b);
}

async function mapAsync<A, B>(value: A | PromiseLike<A>, map: (value: Awaited<A>) => B): Promise<B> {
  return map(await value);
}
async function main(): Promise<void> {
  console.log(JSON.stringify(await mapAsync([3, -1, 3, 0], compute))); // Вывод 1: [-1,0]
  console.log(JSON.stringify(await mapAsync(Promise.resolve([] as number[]), compute))); // Вывод 2: []
  console.log(JSON.stringify(await mapAsync(Promise.resolve([1, 2]), compute))); // Вывод 3: [1,2]
}
void main();

export {};
