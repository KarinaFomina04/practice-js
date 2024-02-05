/* 📌 Задача 960. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и поверхностное копирование. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Spread копирует поля; новое присваивание меняет только поле копии.
  const copy = {...state};
copy.value = [copy.value];
state.value = copy.value;
console.log(JSON.stringify(state.value)); // Вывод 2: ["01"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01"],"type":"object"}
