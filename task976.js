/* 📌 Задача 976. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и var и hoisting. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Объявление var поднято, но инициализация происходит после первого чтения.
  const previous = state.value;
function inspect() { const before = local; var local = previous; return [before ?? 'undefined', local]; }
state.value = inspect();
console.log(JSON.stringify(state.value)); // Вывод 2: ["undefined","01"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["undefined","01"],"type":"object"}
