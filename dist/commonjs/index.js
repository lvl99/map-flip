'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Takes a Map value and outputs a new Map with the keys and values flipped.
 *
 * @param {Map} map
 * @returns {Map}
 */
function mapFlip(map) {
    var flipped = [];
    map.forEach(function (value, key) {
        flipped.push([value, key]);
    });
    return new Map(flipped);
}

exports.default = mapFlip;
exports.mapFlip = mapFlip;
