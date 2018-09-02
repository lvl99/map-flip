/**
 * Takes a Map value and outputs a new Map with the keys and values flipped.
 *
 * @param {Map} map
 * @returns {Map}
 */
function mapFlip(map) {
  const flipped = [];
  map.forEach((value, key) => {
    flipped.push([value, key]);
  });
  return new Map(flipped);
}

module.exports = mapFlip;
