/* 📌 Задача 555. Создай объект с ленивым геттером результата; при создании копируй вход, вычисляй только при первом чтении. Вычисление: рассчитай скользящее среднее полных окон длины два. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.slice(1).map((x, i) => (x + items[i]) / 2);
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
console.log(JSON.stringify(({value: result.value, calls: result.calls}))); // Вывод 2: {"value":[1,1,1.5],"calls":1}
console.log(JSON.stringify(({value: result.value, calls: result.calls}))); // Вывод 3: {"value":[1,1,1.5],"calls":1}
