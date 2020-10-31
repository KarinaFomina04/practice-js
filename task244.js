/* 📌 Задача 244. Для массива целых чисел сначала замени каждую серию равных соседей её длиной; затем проверь наличие цикла в ориентированном графе переходов соседних значений. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

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
  const graph = new Map(a.map(x => [x, new Set()]));
  for (let i = 1; i < a.length; i++) graph.get(a[i - 1]).add(a[i]);
  const color = new Map();
  function visit(x) { if (color.get(x) === 1) return true; if (color.get(x) === 2) return false;
    color.set(x, 1); for (const next of graph.get(x)) if (visit(next)) return true; color.set(x, 2); return false;
  }
  return [...graph.keys()].some(visit);
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,1,1,1,1],"answer":true}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":false}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[2,2],"answer":true}
