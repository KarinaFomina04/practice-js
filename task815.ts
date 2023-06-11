/* 📌 Задача 815. Создай type guard для unknown, принимающий только массив конечных чисел; обрабатывай валидный ввод, иначе возвращай null. Стратегия вычисления: верни суммы полных соседних пар; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const result: number[] = []; for (let i = 1; i < items.length; i += 2) result.push(items[i - 1]! + items[i]!); return result;
}

function isNumbers(value: unknown): value is number[] {
  return Array.isArray(value) && value.every(x => typeof x === 'number' && Number.isFinite(x));
}
function parse(value: unknown): number[] | null { return isNumbers(value) ? compute(value) : null; }

console.log(JSON.stringify(parse([3, -1, 3, 0]))); // Вывод 1: [2,3]
console.log(JSON.stringify(parse([]))); // Вывод 2: []
console.log(JSON.stringify(parse([1, '2']))); // Вывод 3: null

export {};
