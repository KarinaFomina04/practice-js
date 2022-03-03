/* 📌 Задача 536. Создай последовательную Promise-очередь вычислений; результаты ожидай в порядке постановки, без таймеров. Вычисление: построй частотный индекс. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const counts = new Map(); for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1); return [...counts];
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
  console.log(JSON.stringify(await first)); // Вывод 1: [[3,2],[-1,1],[0,1]]
  console.log(JSON.stringify(await second)); // Вывод 2: []
  console.log(JSON.stringify(await third)); // Вывод 3: [[1,1],[2,1]]
}
main().catch(error => { console.error(error); process.exitCode = 1; });
