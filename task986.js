/* 📌 Задача 986. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и поверхностное копирование. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Spread копирует поля; новое присваивание меняет только поле копии.
  const copy = {...state};
copy.value = [copy.value];
state.value = copy.value;
console.log(JSON.stringify(state.value)); // Вывод 2: [1]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1],"type":"object"}
