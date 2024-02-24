/* 📌 Задача 971. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и reduce с начальным значением. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Строковый аккумулятор приводит каждый операнд к строке.
  state.value = [state.value, 2].reduce((acc, x) => acc + String(x), '');
console.log(JSON.stringify(state.value)); // Вывод 2: "012"
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":"012","type":"string"}
