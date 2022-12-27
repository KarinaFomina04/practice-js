/* 📌 Задача 716. Создай последовательную Promise-очередь вычислений; результаты ожидай в порядке постановки, без таймеров. Вычисление: составь отчёт о сумме, количестве и среднем, для пустого среднего используй null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const sum = items.reduce((a, b) => a + b, 0); return {sum, count: items.length, average: items.length ? sum / items.length : null};
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
  console.log(JSON.stringify(await first)); // Вывод 1: {"sum":5,"count":4,"average":1.25}
  console.log(JSON.stringify(await second)); // Вывод 2: {"sum":0,"count":0,"average":null}
  console.log(JSON.stringify(await third)); // Вывод 3: {"sum":3,"count":2,"average":1.5}
}
main().catch(error => { console.error(error); process.exitCode = 1; });
