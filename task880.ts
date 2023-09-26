/* 📌 Задача 880. Создай интерфейс запроса с необязательным payload; используй Required и Pick для нормализованного запроса, отсутствующий payload замени пустым массивом. Стратегия вычисления: верни абсолютные отклонения от нижней медианы; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  if (!items.length) return []; const sorted = [...items].sort((a, b) => a - b), median = sorted[Math.floor((sorted.length - 1) / 2)]!; return items.map(x => Math.abs(x - median));
}

interface Request { id: string; payload?: readonly number[]; note?: string }
type Normalized = Required<Pick<Request, 'id' | 'payload'>>;
function normalize(request: Request): Normalized { return {id: request.id, payload: request.payload ?? []}; }
function dispatch(request: Request): {id: string; result: number[]} {
  const normalized = normalize(request);
  return {id: normalized.id, result: compute(normalized.payload)};
}

console.log(JSON.stringify(dispatch({id: 'a', payload: [3, -1, 3, 0]}))); // Вывод 1: {"id":"a","result":[3,1,3,0]}
console.log(JSON.stringify(dispatch({id: 'b'}))); // Вывод 2: {"id":"b","result":[]}
console.log(JSON.stringify(dispatch({id: 'c', payload: []}))); // Вывод 3: {"id":"c","result":[]}

export {};
