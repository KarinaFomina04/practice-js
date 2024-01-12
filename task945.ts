/* 📌 Задача 945. Создай type guard для unknown, принимающий только массив конечных чисел; обрабатывай валидный ввод, иначе возвращай null. Стратегия вычисления: верни минимум каждого суффикса; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  let minimum = Infinity; const result: number[] = []; for (let i = items.length - 1; i >= 0; i--) { minimum = Math.min(minimum, items[i]!); result[i] = minimum; } return result;
}

function isNumbers(value: unknown): value is number[] {
  return Array.isArray(value) && value.every(x => typeof x === 'number' && Number.isFinite(x));
}
function parse(value: unknown): number[] | null { return isNumbers(value) ? compute(value) : null; }

console.log(JSON.stringify(parse([3, -1, 3, 0]))); // Вывод 1: [-1,-1,0,0]
console.log(JSON.stringify(parse([]))); // Вывод 2: []
console.log(JSON.stringify(parse([1, '2']))); // Вывод 3: null

export {};
