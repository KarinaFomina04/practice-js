/* 📌 Задача 973. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и генератор и передача значения в next. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // Первый next запускает генератор; аргумент второго next становится результатом yield.
  function* exchange() { const received = yield state.value; return received; }
const iterator = exchange();
const first = iterator.next('игнорируется');
state.value = [first.value, iterator.next('ответ').value];
console.log(JSON.stringify(state.value)); // Вывод 2: ["01","ответ"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01","ответ"],"type":"object"}
