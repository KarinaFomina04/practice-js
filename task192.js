/* 📌 Задача 192. Для массива целых чисел сначала замени значения накопленными суммами; затем вычисли объём воды между столбцами высоты max(0, значение). Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  let total = 0; return items.map(x => total += x);
}

function analyze(a) {
  const heights = a.map(x => Math.max(0, x)); let left = 0, right = heights.length - 1, lm = 0, rm = 0, water = 0;
  while (left <= right) {
    if (lm <= rm) { lm = Math.max(lm, heights[left]); water += lm - heights[left++]; }
    else { rm = Math.max(rm, heights[right]); water += rm - heights[right--]; }
  }
  return water;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,2,5,5,7],"answer":1}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2,4,6],"answer":0}
