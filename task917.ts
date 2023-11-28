/* 📌 Задача 917. Создай generic async map для PromiseLike через Awaited; обработай обычное значение и Promise с сохранением типа результата. Стратегия вычисления: верни длину LIS каждого префикса; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const tails: number[] = [], result: number[] = []; for (const x of items) { let left = 0, right = tails.length; while (left < right) { const middle = (left + right) >>> 1; if (tails[middle]! < x) left = middle + 1; else right = middle; } tails[left] = x; result.push(tails.length); } return result;
}

async function mapAsync<A, B>(value: A | PromiseLike<A>, map: (value: Awaited<A>) => B): Promise<B> {
  return map(await value);
}
async function main(): Promise<void> {
  console.log(JSON.stringify(await mapAsync([3, -1, 3, 0], compute))); // Вывод 1: [1,1,2,2]
  console.log(JSON.stringify(await mapAsync(Promise.resolve([] as number[]), compute))); // Вывод 2: []
  console.log(JSON.stringify(await mapAsync(Promise.resolve([1, 2]), compute))); // Вывод 3: [1,2]
}
void main();

export {};
