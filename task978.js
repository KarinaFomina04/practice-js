/* 📌 Задача 978. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и конкатенация массива. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Массив при сложении со строкой превращается в строку с запятыми.
  state.value = [state.value, 2] + '';
console.log(JSON.stringify(state.value)); // Вывод 2: "1,2"
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":"1,2","type":"string"}
