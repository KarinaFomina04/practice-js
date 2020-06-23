/* 📌 Задача 166. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем найди длину минимального отрезка, сортировка которого упорядочит весь массив. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":2}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":0}
