/* 📌 Задача 981. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и нулевое присваивание. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Присваивание ??= заменяет только null или undefined.
  state.value ??= 'резерв';
console.log(JSON.stringify(state.value)); // Вывод 2: 1
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":1,"type":"number"}
