/* 📌 Задача 124. Для массива целых чисел сначала замени каждую серию равных соседей её длиной; затем найди максимальную сумму несоседних элементов, разрешая пустой выбор. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

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
  let skip = 0, take = -Infinity;
  for (const x of a) [skip, take] = [Math.max(skip, take), skip + x];
  return Math.max(skip, take);
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,1,1,1,1],"answer":3}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[2,2],"answer":2}
