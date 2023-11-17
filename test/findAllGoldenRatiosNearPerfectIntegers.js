/**
 * Find pixel distances for UI layout design that are close to golden ratios.
 *
 * @param {number} [upTo = 900] - The maximum base distance desired for evaluation.
 * @param {number} [flex=.1] - The flexibility factor to determine how close the ratios can be to integers.
 * @returns {{low: number, base: number, high: number}[]} - An array containing objects with low, base, and high values representing the golden ratios.
 */
function findAllGoldenRatiosNearPerfectIntegers(upTo = 900, flex = 0.1) {
  const goldenRatio = 1.618;
  const ratios = [];

  for (let i = 1; i < upTo; i++) {
    const low = i / goldenRatio;
    const high = i * goldenRatio;
    const lowDiff = low - Math.floor(low);

    if (lowDiff < flex || lowDiff > (1 - flex)) {
      ratios.push({
        low,
        base: i,
        high,
      });
    }
  }
  return ratios;
}

// Example usage with a base number of 850
const goldenRatiosForUI = findAllGoldenRatiosNearPerfectIntegers(850);
console.dir(goldenRatiosForUI);
