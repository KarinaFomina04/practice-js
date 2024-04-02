/* 📌 Задача 993. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и Set и SameValueZero. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Set устраняет повтор той же ссылки и считает NaN равным NaN; JSON кодирует NaN как null.
  state.value = [...new Set([state.value, state.value, NaN, NaN])];
console.log(JSON.stringify(state.value)); // Вывод 2: [1,null]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1,null],"type":"object"}
