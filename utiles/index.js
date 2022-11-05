export const generatePattern = (sample, amount, stored) => {
  do {
    stored.push(sample[Math.floor(Math.random() * sample.length)])
    amount--
  } while (amount !== 0)
  return stored
}
