/* 📌 Задача 676. Создай последовательную Promise-очередь вычислений; результаты ожидай в порядке постановки, без таймеров. Вычисление: создай индекс следующего появления каждого значения, при отсутствии используй null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const next = new Map(), result = Array(items.length).fill(null); for (let i = items.length - 1; i >= 0; i--) { result[i] = next.get(items[i]) ?? null; next.set(items[i], i); } return result;
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
  console.log(JSON.stringify(await first)); // Вывод 1: [2,null,null,null]
  console.log(JSON.stringify(await second)); // Вывод 2: []
  console.log(JSON.stringify(await third)); // Вывод 3: [null,null]
}
main().catch(error => { console.error(error); process.exitCode = 1; });
