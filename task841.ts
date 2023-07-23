/* 📌 Задача 841. Создай generic-функцию отображения успешного Result с discriminated union; ошибку передавай без изменения. Стратегия вычисления: верни плотные ранги значений начиная с нуля; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const sorted = [...new Set(items)].sort((a, b) => a - b); const ranks = new Map(sorted.map((x, i) => [x, i])); return items.map(x => ranks.get(x)!);
}

type Result<T> = { ok: true; value: T } | { ok: false; error: string };
function mapResult<A, B>(result: Result<A>, map: (value: A) => B): Result<B> {
  return result.ok ? {ok: true, value: map(result.value)} : result;
}

console.log(JSON.stringify(mapResult({ok: true, value: [3, -1, 3, 0]}, compute))); // Вывод 1: {"ok":true,"value":[2,0,2,1]}
console.log(JSON.stringify(mapResult({ok: true, value: []}, compute))); // Вывод 2: {"ok":true,"value":[]}
console.log(JSON.stringify(mapResult<readonly number[], number[]>({ok: false, error: 'нет данных'}, compute))); // Вывод 3: {"ok":false,"error":"нет данных"}

export {};
