/* 📌 Задача 877. Создай generic async map для PromiseLike через Awaited; обработай обычное значение и Promise с сохранением типа результата. Стратегия вычисления: верни абсолютные отклонения от нижней медианы; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  if (!items.length) return []; const sorted = [...items].sort((a, b) => a - b), median = sorted[Math.floor((sorted.length - 1) / 2)]!; return items.map(x => Math.abs(x - median));
}

async function mapAsync<A, B>(value: A | PromiseLike<A>, map: (value: Awaited<A>) => B): Promise<B> {
  return map(await value);
}
async function main(): Promise<void> {
  console.log(JSON.stringify(await mapAsync([3, -1, 3, 0], compute))); // Вывод 1: [3,1,3,0]
  console.log(JSON.stringify(await mapAsync(Promise.resolve([] as number[]), compute))); // Вывод 2: []
  console.log(JSON.stringify(await mapAsync(Promise.resolve([1, 2]), compute))); // Вывод 3: [0,1]
}
void main();

export {};
