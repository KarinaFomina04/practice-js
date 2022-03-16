/* 📌 Задача 545. Создай объект с ленивым геттером результата; при создании копируй вход, вычисляй только при первом чтении. Вычисление: сгруппируй числа по знаку. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  const result = {negative: [], zero: [], positive: []}; for (const x of items) result[x < 0 ? "negative" : x > 0 ? "positive" : "zero"].push(x); return result;
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
console.log(JSON.stringify(({value: result.value, calls: result.calls}))); // Вывод 2: {"value":{"negative":[-1],"zero":[0],"positive":[3,3]},"calls":1}
console.log(JSON.stringify(({value: result.value, calls: result.calls}))); // Вывод 3: {"value":{"negative":[-1],"zero":[0],"positive":[3,3]},"calls":1}
