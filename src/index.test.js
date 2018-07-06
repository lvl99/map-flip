import mapFlip from "./index";

test("Do a map flip!", () => {
  const testMap = new Map([[0, "First"], [1, "Second"], [2, "Third"]]);
  const flippedTestMap = mapFlip(testMap);

  expect(flippedTestMap).toBeInstanceOf(Map);
  expect(flippedTestMap.get("First")).toBe(0);
  expect(flippedTestMap.get("Second")).toBe(1);
  expect(flippedTestMap.get("Third")).toBe(2);
});
