/* 📌 Задача 706. Создай последовательную Promise-очередь вычислений; результаты ожидай в порядке постановки, без таймеров. Вычисление: построй уникальные неупорядоченные пары разных позиций. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const result = [], seen = new Set(); for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) { const pair = [items[i], items[j]].sort((a, b) => a - b), key = JSON.stringify(pair); if (!seen.has(key)) { seen.add(key); result.push(pair); } } return result;
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
  console.log(JSON.stringify(await first)); // Вывод 1: [[-1,3],[3,3],[0,3],[-1,0]]
  console.log(JSON.stringify(await second)); // Вывод 2: []
  console.log(JSON.stringify(await third)); // Вывод 3: [[1,2]]
}
main().catch(error => { console.error(error); process.exitCode = 1; });
