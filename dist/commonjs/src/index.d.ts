/**
 * Takes a Map value and outputs a new Map with the keys and values flipped.
 *
 * @param {Map} map
 * @returns {Map}
 */
export default function mapFlip<K, V>(map: Map<K, V>): Map<V, K>;
