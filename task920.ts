/* 📌 Задача 920. Создай интерфейс запроса с необязательным payload; используй Required и Pick для нормализованного запроса, отсутствующий payload замени пустым массивом. Стратегия вычисления: верни длину LIS каждого префикса; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const tails: number[] = [], result: number[] = []; for (const x of items) { let left = 0, right = tails.length; while (left < right) { const middle = (left + right) >>> 1; if (tails[middle]! < x) left = middle + 1; else right = middle; } tails[left] = x; result.push(tails.length); } return result;
}

interface Request { id: string; payload?: readonly number[]; note?: string }
type Normalized = Required<Pick<Request, 'id' | 'payload'>>;
function normalize(request: Request): Normalized { return {id: request.id, payload: request.payload ?? []}; }
function dispatch(request: Request): {id: string; result: number[]} {
  const normalized = normalize(request);
  return {id: normalized.id, result: compute(normalized.payload)};
}

console.log(JSON.stringify(dispatch({id: 'a', payload: [3, -1, 3, 0]}))); // Вывод 1: {"id":"a","result":[1,1,2,2]}
console.log(JSON.stringify(dispatch({id: 'b'}))); // Вывод 2: {"id":"b","result":[]}
console.log(JSON.stringify(dispatch({id: 'c', payload: []}))); // Вывод 3: {"id":"c","result":[]}

export {};
