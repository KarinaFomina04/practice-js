/* 📌 Задача 265. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем найди минимальное число удалений для получения строго возрастающей последовательности. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":2}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":2}
