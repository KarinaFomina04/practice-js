/* 📌 Задача 968. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и Map различает типы ключей. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Строковый ключ совпадает с исходным только когда исходный ключ уже строка.
  const map = new Map([[state.value, 'исходный'], [String(state.value), 'строка']]);
state.value = [map.size, map.get(state.value)];
console.log(JSON.stringify(state.value)); // Вывод 2: [1,"строка"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1,"строка"],"type":"object"}
