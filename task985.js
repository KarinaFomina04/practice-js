/* 📌 Задача 985. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и деструктуризация с остатком. Обрати внимание на тип промежуточного значения. Уровень: Junior. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Rest-объект содержит остальные собственные перечисляемые поля.
  const {value, ...rest} = state;
state.value = [value, Object.keys(rest).length];
console.log(JSON.stringify(state.value)); // Вывод 2: [1,0]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1,0],"type":"object"}
