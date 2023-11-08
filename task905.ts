/* 📌 Задача 905. Создай type guard для unknown, принимающий только массив конечных чисел; обрабатывай валидный ввод, иначе возвращай null. Стратегия вычисления: сожми последовательные целые в отсортированный список границ интервалов; входной массив не изменяй. Уровень: Middle. */

function compute(items: readonly number[]): number[] {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result: number[] = []; for (let i = 0; i < sorted.length;) { const first = sorted[i]!; let last = first; while (i + 1 < sorted.length && sorted[i + 1] === last + 1) last = sorted[++i]!; result.push(first, last); i++; } return result;
}

function isNumbers(value: unknown): value is number[] {
  return Array.isArray(value) && value.every(x => typeof x === 'number' && Number.isFinite(x));
}
function parse(value: unknown): number[] | null { return isNumbers(value) ? compute(value) : null; }

console.log(JSON.stringify(parse([3, -1, 3, 0]))); // Вывод 1: [-1,0,3,3]
console.log(JSON.stringify(parse([]))); // Вывод 2: []
console.log(JSON.stringify(parse([1, '2']))); // Вывод 3: null

export {};
