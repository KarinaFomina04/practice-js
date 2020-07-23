/* 📌 Задача 184. Для массива целых чисел сначала замени каждую серию равных соседей её длиной; затем построй все уникальные перестановки массива рекурсивным перебором. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

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
  const counts = new Map(), result = [];
  for (const x of a) counts.set(x, (counts.get(x) ?? 0) + 1);
  function visit(path) {
    if (path.length === a.length) { result.push([...path]); return; }
    for (const [x, count] of counts) if (count) { counts.set(x, count - 1); path.push(x); visit(path); path.pop(); counts.set(x, count); }
  }
  visit([]); return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,1,1,1,1],"answer":[[1,1,1,1,1]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[[]]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[2,2],"answer":[[2,2]]}
