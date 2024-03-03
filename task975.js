/* 📌 Задача 975. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и порядок вычисления аргументов. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Аргументы вычисляются слева направо, затем возвращённый массив присваивается полю.
  function collect(a, b) { return [a, b]; }
state.value = collect(state.value, state.value = 'замена');
console.log(JSON.stringify(state.value)); // Вывод 2: ["01","замена"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01","замена"],"type":"object"}
