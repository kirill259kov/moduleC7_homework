import { revertString } from "../../utils/revertString.js";

describe("test for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});
