/* 📌 Задача 164. Для массива целых чисел сначала замени каждую серию равных соседей её длиной; затем найди длину минимального отрезка, сортировка которого упорядочит весь массив. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const runs = [];
  for (let i = 0; i < items.length;) {
    let end = i + 1;
    while (end < items.length && items[end] === items[i]) end++;
    runs.push(end - i); i = end;
  }
  return runs;
}

function analyze(a) {
  const sorted = [...a].sort((x, y) => x - y); let left = 0, right = a.length - 1;
  while (left < a.length && a[left] === sorted[left]) left++;
  while (right >= left && a[right] === sorted[right]) right--;
  return right - left + 1;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,1,1,1,1],"answer":0}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[2,2],"answer":0}
