/* 📌 Задача 954. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и логическое присваивание ИЛИ. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Присваивание ||= выполняется только для ложного значения.
  state.value ||= 'резерв';
console.log(JSON.stringify(state.value)); // Вывод 2: "01"
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":"01","type":"string"}
