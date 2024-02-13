/* 📌 Задача 964. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и геттер с побочным эффектом. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Каждое чтение геттера выполняет его тело.
  let reads = 0;
const host = {get value() { reads++; return state.value; }};
const captured = host.value;
state.value = [captured, reads];
console.log(JSON.stringify(state.value)); // Вывод 2: ["01",1]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01",1],"type":"object"}
