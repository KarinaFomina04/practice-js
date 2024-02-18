/* 📌 Задача 967. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и Set и SameValueZero. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Set устраняет повтор той же ссылки и считает NaN равным NaN; JSON кодирует NaN как null.
  state.value = [...new Set([state.value, state.value, NaN, NaN])];
console.log(JSON.stringify(state.value)); // Вывод 2: ["01",null]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01",null],"type":"object"}
