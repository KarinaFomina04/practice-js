/* 📌 Задача 791. Создай generic-функцию отображения успешного Result с discriminated union; ошибку передавай без изменения. Стратегия вычисления: оставь только значения с частотой один; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const counts = new Map<number, number>(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return items.filter(x => counts.get(x) === 1);
}

type Result<T> = { ok: true; value: T } | { ok: false; error: string };
function mapResult<A, B>(result: Result<A>, map: (value: A) => B): Result<B> {
  return result.ok ? {ok: true, value: map(result.value)} : result;
}

console.log(JSON.stringify(mapResult({ok: true, value: [3, -1, 3, 0]}, compute))); // Вывод 1: {"ok":true,"value":[-1,0]}
console.log(JSON.stringify(mapResult({ok: true, value: []}, compute))); // Вывод 2: {"ok":true,"value":[]}
console.log(JSON.stringify(mapResult<readonly number[], number[]>({ok: false, error: 'нет данных'}, compute))); // Вывод 3: {"ok":false,"error":"нет данных"}

export {};
