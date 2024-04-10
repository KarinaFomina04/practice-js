/* 📌 Задача 997. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и reduce с начальным значением. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Строковый аккумулятор приводит каждый операнд к строке.
  state.value = [state.value, 2].reduce((acc, x) => acc + String(x), '');
console.log(JSON.stringify(state.value)); // Вывод 2: "12"
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":"12","type":"string"}
