/* 📌 Задача 972. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и flatMap и удаление элементов. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // flatMap разворачивает возвращённые массивы на один уровень; пустой массив удаляет элемент.
  state.value = [state.value, null, 0].flatMap(x => x === null ? [] : [x, x]);
console.log(JSON.stringify(state.value)); // Вывод 2: ["01","01",0,0]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01","01",0,0],"type":"object"}
