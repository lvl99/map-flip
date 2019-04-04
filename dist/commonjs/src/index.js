/**
 * Takes a Map value and outputs a new Map with the keys and values flipped.
 *
 * @param {Map} map
 * @returns {Map}
 */
export default function mapFlip(map) {
    var flipped = [];
    map.forEach(function (value, key) {
        flipped.push([value, key]);
    });
    return new Map(flipped);
}
//# sourceMappingURL=index.js.map