export function hexToRgba(hex, alpha = 1) {
  let cleaned = hex.replace("#", "");

  if (cleaned.length === 3) {
    cleaned = cleaned
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Generates random number inclusively, excluding the given number
 * @param {number} min
 * @param {number} max
 * @param {number|undefined} exclude
 * @returns {number}
 */
export function generateRandomBetween(min, max, exclude) {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
}
