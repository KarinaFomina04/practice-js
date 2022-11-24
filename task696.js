/* 📌 Задача 696. Создай последовательную Promise-очередь вычислений; результаты ожидай в порядке постановки, без таймеров. Вычисление: преобразуй массив в непересекающиеся интервалы последовательных целых после устранения дублей. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b), result = []; for (const x of sorted) { if (result.length && result.at(-1)[1] + 1 === x) result.at(-1)[1] = x; else result.push([x, x]); } return result;
}

function createQueue() {
  let tail = Promise.resolve();
  return items => {
    const snapshot = [...items];
    const result = tail.then(() => compute(snapshot));
    tail = result.then(() => undefined, () => undefined);
    return result;
  };
}
async function main() {
  const enqueue = createQueue();
  const first = enqueue([3, -1, 3, 0]), second = enqueue([]), third = enqueue([1, 2]);
  console.log(JSON.stringify(await first)); // Вывод 1: [[-1,0],[3,3]]
  console.log(JSON.stringify(await second)); // Вывод 2: []
  console.log(JSON.stringify(await third)); // Вывод 3: [[1,2]]
}
main().catch(error => { console.error(error); process.exitCode = 1; });
