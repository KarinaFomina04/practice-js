/* 📌 Задача 998. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и flatMap и удаление элементов. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // flatMap разворачивает возвращённые массивы на один уровень; пустой массив удаляет элемент.
  state.value = [state.value, null, 0].flatMap(x => x === null ? [] : [x, x]);
console.log(JSON.stringify(state.value)); // Вывод 2: [1,1,0,0]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1,1,0,0],"type":"object"}
