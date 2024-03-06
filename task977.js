/* 📌 Задача 977. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и try/finally и возвращаемое значение. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Возвращаемое значение вычисляется до finally, а finally выполняется до выхода из функции.
  function inspect() { try { return state.value; } finally { state.value = 'finally'; } }
const captured = inspect();
state.value = [captured, state.value];
console.log(JSON.stringify(state.value)); // Вывод 2: ["01","finally"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01","finally"],"type":"object"}
