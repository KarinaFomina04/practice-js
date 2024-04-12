/* 📌 Задача 999. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: префиксный инкремент и числовое приведение и генератор и передача значения в next. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Инкремент сначала приводит значение к числу и возвращает увеличенное значение.
  state.value = ++state.value;
console.log(JSON.stringify(state.value)); // Вывод 1: 1
}

{
  // Первый next запускает генератор; аргумент второго next становится результатом yield.
  function* exchange() { const received = yield state.value; return received; }
const iterator = exchange();
const first = iterator.next('игнорируется');
state.value = [first.value, iterator.next('ответ').value];
console.log(JSON.stringify(state.value)); // Вывод 2: [1,"ответ"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":[1,"ответ"],"type":"object"}
