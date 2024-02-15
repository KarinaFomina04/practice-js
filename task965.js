/* 📌 Задача 965. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и Object.assign вызывает сеттер. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Object.assign записывает значения через сеттер целевого объекта.
  let stored;
const target = {set value(x) { stored = [x, 'сеттер']; }};
Object.assign(target, state);
state.value = stored;
console.log(JSON.stringify(state.value)); // Вывод 2: ["01","сеттер"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01","сеттер"],"type":"object"}
