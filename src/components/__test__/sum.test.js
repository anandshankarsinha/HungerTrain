//test file

import { sum } from "../sum";

test("Check sum of 2 positive numbers", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-2, 3)).toBe(1);
  expect(sum(3, -2)).toBe(1);
});
 