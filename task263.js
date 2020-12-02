/* 📌 Задача 263. Для массива целых чисел сначала построй разности соседних значений; затем найди минимальное число удалений для получения строго возрастающей последовательности. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  return items.slice(1).map((x, i) => x - items[i]);
}

function analyze(a) {
  const dp = a.map(() => 1); let best = 0;
  for (let i = 0; i < a.length; i++) { for (let j = 0; j < i; j++) if (a[j] < a[i]) dp[i] = Math.max(dp[i], dp[j] + 1); best = Math.max(best, dp[i]); }
  return a.length - best;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-4,4,-3,2],"answer":1}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,1,0],"answer":1}
