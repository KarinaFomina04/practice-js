/* 📌 Задача 963. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и стрелочная функция и лексический this. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Стрелочная функция наследует this вызова create и игнорирует call.
  const host = {value: state.value, create() { return () => this.value; }};
const read = host.create();
state.value = read.call({value: 'другой'});
console.log(JSON.stringify(state.value)); // Вывод 2: "01"
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":"01","type":"string"}
