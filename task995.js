/* 📌 Задача 995. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и разреженный массив и map. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // map пропускает пустые позиции массива; JSON представляет их как null.
  const values = Array(3); values[1] = state.value;
state.value = values.map(x => [x]);
console.log(JSON.stringify(state.value)); // Вывод 2: [null,[1],null]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[null,[1],null],"type":"object"}
