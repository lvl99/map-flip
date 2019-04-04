import mapFlipCommonJs from "../dist/commonjs";
import mapFlipModuleJs from "../dist/mjs";

describe("commonjs", () => {
  it("should work", () => {
    expect(() => {
      const flippedMap = mapFlipCommonJs(new Map([
        [1, 2],
        [3, 4]
      ]));
    }).not.toThrow();
  })
})

describe("mjs", () => {
  it("should work", () => {
    expect(() => {
      const flippedMap = mapFlipModuleJs(new Map([
        [1, 2],
        [3, 4]
      ]));
    }).not.toThrow();
  })
})