/* 📌 Задача 970. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и Array.from заполняет пустоты. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Array.from вызывает функцию отображения и для отсутствующей позиции.
  const values = Array(2); values[1] = state.value;
state.value = Array.from(values, (x, i) => x === undefined ? i : x);
console.log(JSON.stringify(state.value)); // Вывод 2: [0,"01"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[0,"01"],"type":"object"}
