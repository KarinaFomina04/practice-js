/* 📌 Задача 958. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и значение по умолчанию при деструктуризации. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Значение по умолчанию используется только вместо undefined.
  const {value = 'нет'} = state;
state.value = value;
console.log(JSON.stringify(state.value)); // Вывод 2: "01"
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":"01","type":"string"}
