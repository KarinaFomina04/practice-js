/* 📌 Задача 959. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и деструктуризация с остатком. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Rest-объект содержит остальные собственные перечисляемые поля.
  const {value, ...rest} = state;
state.value = [value, Object.keys(rest).length];
console.log(JSON.stringify(state.value)); // Вывод 2: ["01",0]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01",0],"type":"object"}
