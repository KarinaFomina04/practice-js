/* 📌 Задача 966. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и Symbol.toPrimitive. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // String передаёт подсказку string, унарный плюс передаёт number.
  const previous = state.value;
const host = {[Symbol.toPrimitive](hint) { return hint === 'number' ? 7 : String(previous); }};
state.value = [String(host), +host];
console.log(JSON.stringify(state.value)); // Вывод 2: ["01",7]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01",7],"type":"object"}
