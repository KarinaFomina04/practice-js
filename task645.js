/* 📌 Задача 645. Создай объект с ленивым геттером результата; при создании копируй вход, вычисляй только при первом чтении. Вычисление: построй список объектов с индексом, значением и квадратом. Вход содержит конечные целые числа. Уровень: Middle. */

function compute(items) {
  return items.map((value, index) => ({index, value, square: value * value}));
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
console.log(JSON.stringify(({value: result.value, calls: result.calls}))); // Вывод 2: {"value":[{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}],"calls":1}
console.log(JSON.stringify(({value: result.value, calls: result.calls}))); // Вывод 3: {"value":[{"index":0,"value":3,"square":9},{"index":1,"value":-1,"square":1},{"index":2,"value":3,"square":9},{"index":3,"value":0,"square":0}],"calls":1}
