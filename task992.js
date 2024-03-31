/* 📌 Задача 992. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и Symbol.toPrimitive. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // String передаёт подсказку string, унарный плюс передаёт number.
  const previous = state.value;
const host = {[Symbol.toPrimitive](hint) { return hint === 'number' ? 7 : String(previous); }};
state.value = [String(host), +host];
console.log(JSON.stringify(state.value)); // Вывод 2: ["1",7]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["1",7],"type":"object"}
