/**
 * Takes a Map value and outputs a new Map with the keys and values flipped.
 *
 * @param {Map} map
 * @returns {Map}
 */
export function mapFlip<K, V>(map: Map<K, V>): Map<V, K> {
  const flipped: [V, K][] = [];
  map.forEach((value, key) => {
    flipped.push([value, key]);
  });
  return new Map(flipped);
}

export default mapFlip;
