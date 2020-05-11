/* 📌 Задача 140. Для массива целых чисел сначала построй расстояния между последовательными появлениями одинаковых значений; затем найди длину наибольшей палиндромной подпоследовательности. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const last = new Map(); const result = [];
  items.forEach((x, i) => {
    if (last.has(x)) result.push(i - last.get(x));
    last.set(x, i);
  });
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[2],"answer":1}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1],"answer":2}
