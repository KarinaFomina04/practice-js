/* 📌 Задача 957. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и проверка Object.is. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Object.is распознаёт NaN, в отличие от строгого равенства.
  const same = Object.is(state.value, NaN);
state.value = same;
console.log(JSON.stringify(state.value)); // Вывод 2: false
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":false,"type":"boolean"}
