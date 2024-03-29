/* 📌 Задача 991. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и Object.assign вызывает сеттер. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Object.assign записывает значения через сеттер целевого объекта.
  let stored;
const target = {set value(x) { stored = [x, 'сеттер']; }};
Object.assign(target, state);
state.value = stored;
console.log(JSON.stringify(state.value)); // Вывод 2: [1,"сеттер"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1,"сеттер"],"type":"object"}
