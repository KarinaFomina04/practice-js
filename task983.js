/* 📌 Задача 983. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и проверка Object.is. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Object.is распознаёт NaN, в отличие от строгого равенства.
  const same = Object.is(state.value, NaN);
state.value = same;
console.log(JSON.stringify(state.value)); // Вывод 2: false
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":false,"type":"boolean"}
