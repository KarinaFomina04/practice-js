/* 📌 Задача 987. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и замыкание с поздним чтением. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Замыкание читает актуальное поле объекта в момент вызова.
  const read = () => state.value;
state.value = [read(), 'замыкание'];
console.log(JSON.stringify(read())); // Вывод 2: [1,"замыкание"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1,"замыкание"],"type":"object"}
