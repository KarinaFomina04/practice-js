/* 📌 Задача 962. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и bind фиксирует контекст. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Контекст связанной функции нельзя заменить повторным call.
  function read() { return this.value; }
const bound = read.bind(state);
state.value = [bound.call({value: 'другой'}), 'bind'];
console.log(JSON.stringify(state.value)); // Вывод 2: ["01","bind"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01","bind"],"type":"object"}
