/* 📌 Задача 996. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и Array.from заполняет пустоты. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Array.from вызывает функцию отображения и для отсутствующей позиции.
  const values = Array(2); values[1] = state.value;
state.value = Array.from(values, (x, i) => x === undefined ? i : x);
console.log(JSON.stringify(state.value)); // Вывод 2: [0,1]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[0,1],"type":"object"}
