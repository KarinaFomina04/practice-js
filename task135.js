/* 📌 Задача 135. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем найди длину наибольшей палиндромной подпоследовательности. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
}

function analyze(a) {
  const n = a.length; if (!n) return 0;
  const dp = Array.from({length: n}, () => Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) { dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) dp[i][j] = a[i] === a[j] ? 2 + (dp[i + 1]?.[j - 1] ?? 0) : Math.max(dp[i + 1][j], dp[i][j - 1]);
  }
  return dp[0][n - 1];
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":3}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":2}
