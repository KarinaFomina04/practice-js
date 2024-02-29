/* 📌 Задача 974. Предскажи три строки JSON-вывода и объясни взаимодействие механизмов: постинкремент и сложение со строкой и наследование и super. Обрати внимание на тип промежуточного значения. Уровень: Middle. */

const state = {value: 0};

{
  // Постинкремент возвращает старое число; строковый операнд включает конкатенацию.
  state.value = state.value++ + '1';
console.log(JSON.stringify(state.value)); // Вывод 1: "01"
}

{
  // super.read вызывает метод родителя до присваивания нового значения полю.
  class Base { read() { return state.value; } }
class Child extends Base { read() { return [super.read(), 'наследник']; } }
state.value = new Child().read();
console.log(JSON.stringify(state.value)); // Вывод 2: ["01","наследник"]
}

console.log(JSON.stringify({value: state.value, type: typeof state.value})); // Вывод 3: {"value":["01","наследник"],"type":"object"}
