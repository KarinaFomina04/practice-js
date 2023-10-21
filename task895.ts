/* 📌 Задача 895. Создай type guard для unknown, принимающий только массив конечных чисел; обрабатывай валидный ввод, иначе возвращай null. Стратегия вычисления: верни расстояние до предыдущего такого же значения или минус один; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const last = new Map<number, number>(); return items.map((x, i) => { const previous = last.get(x); last.set(x, i); return previous === undefined ? -1 : i - previous; });
}

function isNumbers(value: unknown): value is number[] {
  return Array.isArray(value) && value.every(x => typeof x === 'number' && Number.isFinite(x));
}
function parse(value: unknown): number[] | null { return isNumbers(value) ? compute(value) : null; }

console.log(JSON.stringify(parse([3, -1, 3, 0]))); // Вывод 1: [-1,-1,2,-1]
console.log(JSON.stringify(parse([]))); // Вывод 2: []
console.log(JSON.stringify(parse([1, '2']))); // Вывод 3: null

export {};
