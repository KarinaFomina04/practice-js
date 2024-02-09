/* 📌 Задача 961. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и замыкание с поздним чтением. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Замыкание читает актуальное поле объекта в момент вызова.
  const read = () => state.value;
state.value = [read(), 'замыкание'];
console.log(JSON.stringify(read())); // Вывод 2: ["01","замыкание"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01","замыкание"],"type":"object"}
