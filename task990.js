/* 📌 Задача 990. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и геттер с побочным эффектом. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Каждое чтение геттера выполняет его тело.
  let reads = 0;
const host = {get value() { reads++; return state.value; }};
const captured = host.value;
state.value = [captured, reads];
console.log(JSON.stringify(state.value)); // Вывод 2: [1,1]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1,1],"type":"object"}
