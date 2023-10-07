/* 📌 Задача 887. Создай generic async map для PromiseLike через Awaited; обработай обычное значение и Promise с сохранением типа результата. Стратегия вычисления: верни длины возрастающих серий, заканчивающихся на каждой позиции; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  let run = 0; return items.map((x, i) => run = i > 0 && x > items[i - 1]! ? run + 1 : 1);
}

async function mapAsync<A, B>(value: A | PromiseLike<A>, map: (value: Awaited<A>) => B): Promise<B> {
  return map(await value);
}
async function main(): Promise<void> {
  console.log(JSON.stringify(await mapAsync([3, -1, 3, 0], compute))); // Вывод 1: [1,1,2,1]
  console.log(JSON.stringify(await mapAsync(Promise.resolve([] as number[]), compute))); // Вывод 2: []
  console.log(JSON.stringify(await mapAsync(Promise.resolve([1, 2]), compute))); // Вывод 3: [1,2]
}
void main();

export {};
