/* 📌 Задача 994. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и Map различает типы ключей. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Строковый ключ совпадает с исходным только когда исходный ключ уже строка.
  const map = new Map([[state.value, 'исходный'], [String(state.value), 'строка']]);
state.value = [map.size, map.get(state.value)];
console.log(JSON.stringify(state.value)); // Вывод 2: [2,"исходный"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[2,"исходный"],"type":"object"}
