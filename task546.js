/* 📌 Задача 546. Создай последовательную Promise-очередь вычислений; результаты ожидай в порядке постановки, без таймеров. Вычисление: сгруппируй числа по знаку. Вход содержит конечные целые числа. Уровень: Senior. */

function compute(items) {
  const result = {negative: [], zero: [], positive: []}; for (const x of items) result[x < 0 ? "negative" : x > 0 ? "positive" : "zero"].push(x); return result;
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
  console.log(JSON.stringify(await first)); // Вывод 1: {"negative":[-1],"zero":[0],"positive":[3,3]}
  console.log(JSON.stringify(await second)); // Вывод 2: {"negative":[],"zero":[],"positive":[]}
  console.log(JSON.stringify(await third)); // Вывод 3: {"negative":[],"zero":[],"positive":[1,2]}
}
main().catch(error => { console.error(error); process.exitCode = 1; });
