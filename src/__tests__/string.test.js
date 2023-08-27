import { revertString } from "../string.js";

describe("test for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});