/* 📌 Задача 726. Создай последовательную Promise-очередь вычислений; результаты ожидай в порядке постановки, без таймеров. Вычисление: построй границы серий одинакового знака как полуинтервалы индексов. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const result = []; for (let i = 0; i < items.length; i++) { if (i === 0 || Math.sign(items[i]) !== Math.sign(items[i - 1])) result.push([i, i + 1]); else result.at(-1)[1] = i + 1; } return result;
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
  console.log(JSON.stringify(await first)); // Вывод 1: [[0,1],[1,2],[2,3],[3,4]]
  console.log(JSON.stringify(await second)); // Вывод 2: []
  console.log(JSON.stringify(await third)); // Вывод 3: [[0,2]]
}
main().catch(error => { console.error(error); process.exitCode = 1; });
