/* 📌 Задача 705. Создай объект с ленивым геттером результата; при создании копируй вход, вычисляй только при первом чтении. Вычисление: построй уникальные неупорядоченные пары разных позиций. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = [], seen = new Set(); for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) { const pair = [items[i], items[j]].sort((a, b) => a - b), key = JSON.stringify(pair); if (!seen.has(key)) { seen.add(key); result.push(pair); } } return result;
}

function lazy(items) {
  const snapshot = [...items]; let ready = false, value, calls = 0;
  return {
    get value() { if (!ready) { value = compute(snapshot); calls++; ready = true; } return value; },
    get calls() { return calls; }
  };
}
const input = [3, -1, 3, 0], result = lazy(input);
input.push(99);

console.log(JSON.stringify(result.calls)); // Вывод 1: 0
console.log(JSON.stringify(({value: result.value, calls: result.calls}))); // Вывод 2: {"value":[[-1,3],[3,3],[0,3],[-1,0]],"calls":1}
console.log(JSON.stringify(({value: result.value, calls: result.calls}))); // Вывод 3: {"value":[[-1,3],[3,3],[0,3],[-1,0]],"calls":1}
