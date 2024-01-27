/* 📌 Задача 953. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и числовой унарный плюс. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Унарный плюс выполняет числовое приведение; JSON записывает NaN как null.
  state.value = +state.value;
console.log(JSON.stringify(state.value)); // Вывод 2: 1
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":1,"type":"number"}
