/* 📌 Задача 181. Для массива целых чисел сначала оставь только первые появления значений; затем построй все уникальные перестановки массива рекурсивным перебором. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  return [...new Set(items)];
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,-1,0,2],"answer":[[3,-1,0,2],[3,-1,2,0],[3,0,-1,2],[3,0,2,-1],[3,2,-1,0],[3,2,0,-1],[-1,3,0,2],[-1,3,2,0],[-1,0,3,2],[-1,0,2,3],[-1,2,3,0],[-1,2,0,3],[0,3,-1,2],[0,3,2,-1],[0,-1,3,2],[0,-1,2,3],[0,2,3,-1],[0,2,-1,3],[2,3,-1,0],[2,3,0,-1],[2,-1,3,0],[2,-1,0,3],[2,0,3,-1],[2,0,-1,3]]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[[]]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2],"answer":[[1,2],[2,1]]}
