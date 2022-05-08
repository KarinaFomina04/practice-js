/* 📌 Задача 576. Создай последовательную Promise-очередь вычислений; результаты ожидай в порядке постановки, без таймеров. Вычисление: вычисли минимум и максимум, для пустого массива верни null. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  if (!items.length) return null; return items.reduce((r, x) => ({min: Math.min(r.min, x), max: Math.max(r.max, x)}), {min: items[0], max: items[0]});
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
  console.log(JSON.stringify(await first)); // Вывод 1: {"min":-1,"max":3}
  console.log(JSON.stringify(await second)); // Вывод 2: null
  console.log(JSON.stringify(await third)); // Вывод 3: {"min":1,"max":2}
}
main().catch(error => { console.error(error); process.exitCode = 1; });
