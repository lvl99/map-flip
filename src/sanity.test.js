var mapFlipCommonJs = require("../dist/commonjs").default;

describe("commonjs", () => {
  it("should work", () => {
    expect(() => {
      var flippedMap = mapFlipCommonJs(new Map([
        [1, 2],
        [3, 4]
      ]));
    }).not.toThrow();
  });
});