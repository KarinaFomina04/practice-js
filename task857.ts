/* 📌 Задача 857. Создай generic async map для PromiseLike через Awaited; обработай обычное значение и Promise с сохранением типа результата. Стратегия вычисления: верни индексы локальных строгих максимумов, не включая края; входной массив не изменяй. Уровень: Senior. */

function compute(items: readonly number[]): number[] {
  const result: number[] = []; for (let i = 1; i + 1 < items.length; i++) if (items[i]! > items[i - 1]! && items[i]! > items[i + 1]!) result.push(i); return result;
}

async function mapAsync<A, B>(value: A | PromiseLike<A>, map: (value: Awaited<A>) => B): Promise<B> {
  return map(await value);
}
async function main(): Promise<void> {
  console.log(JSON.stringify(await mapAsync([3, -1, 3, 0], compute))); // Вывод 1: [2]
  console.log(JSON.stringify(await mapAsync(Promise.resolve([] as number[]), compute))); // Вывод 2: []
  console.log(JSON.stringify(await mapAsync(Promise.resolve([1, 2]), compute))); // Вывод 3: []
}
void main();

export {};
