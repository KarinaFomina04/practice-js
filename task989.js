/* 📌 Задача 989. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и стрелочная функция и лексический this. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Стрелочная функция наследует this вызова create и игнорирует call.
  const host = {value: state.value, create() { return () => this.value; }};
const read = host.create();
state.value = read.call({value: 'другой'});
console.log(JSON.stringify(state.value)); // Вывод 2: 1
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":1,"type":"number"}
