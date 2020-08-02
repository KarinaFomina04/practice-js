/* 📌 Задача 190. Для массива целых чисел сначала построй расстояния между последовательными появлениями одинаковых значений; затем построй все уникальные перестановки массива рекурсивным перебором. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const last = new Map(); const result = [];
  items.forEach((x, i) => {
    if (last.has(x)) result.push(i - last.get(x));
    last.set(x, i);
  });
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[2],"answer":[[2]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[[]]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1],"answer":[[1,1]]}
