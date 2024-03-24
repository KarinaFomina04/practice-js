/* 📌 Задача 988. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и bind фиксирует контекст. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Контекст связанной функции нельзя заменить повторным call.
  function read() { return this.value; }
const bound = read.bind(state);
state.value = [bound.call({value: 'другой'}), 'bind'];
console.log(JSON.stringify(state.value)); // Вывод 2: [1,"bind"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1,"bind"],"type":"object"}
