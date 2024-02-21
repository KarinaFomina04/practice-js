/* 📌 Задача 969. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и разреженный массив и map. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // map пропускает пустые позиции массива; JSON представляет их как null.
  const values = Array(3); values[1] = state.value;
state.value = values.map(x => [x]);
console.log(JSON.stringify(state.value)); // Вывод 2: [null,["01"],null]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[null,["01"],null],"type":"object"}
