/* 📌 Задача 830. Создай интерфейс запроса с необязательным payload; используй Required и Pick для нормализованного запроса, отсутствующий payload замени пустым массивом. Стратегия вычисления: верни произведения остальных элементов без деления; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const result = items.map(() => 1); let product = 1; for (let i = 0; i < items.length; i++) { result[i] = product; product *= items[i]!; } product = 1; for (let i = items.length - 1; i >= 0; i--) { result[i] = result[i]! * product; product *= items[i]!; } return result;
}

interface Request { id: string; payload?: readonly number[]; note?: string }
type Normalized = Required<Pick<Request, 'id' | 'payload'>>;
function normalize(request: Request): Normalized { return {id: request.id, payload: request.payload ?? []}; }
function dispatch(request: Request): {id: string; result: number[]} {
  const normalized = normalize(request);
  return {id: normalized.id, result: compute(normalized.payload)};
}

console.log(JSON.stringify(dispatch({id: 'a', payload: [3, -1, 3, 0]}))); // Вывод 1: {"id":"a","result":[0,0,0,-9]}
console.log(JSON.stringify(dispatch({id: 'b'}))); // Вывод 2: {"id":"b","result":[]}
console.log(JSON.stringify(dispatch({id: 'c', payload: []}))); // Вывод 3: {"id":"c","result":[]}

export {};
