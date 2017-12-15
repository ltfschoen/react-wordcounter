import countWords from '../countWords';

describe("the counting function", () => {
  it("counts the correct number of words", () => {
    expect(countWords("one two three")).toBe(3);
  });

  it("doesn't miscount the number of words", () => {
    expect(countWords("one two three")).not.toBe(4);
  });

  it("counts an empty string", () => {
    expect(countWords("")).toBe(0);
  });

  it("counts the correct number of words", () => {
    expect(countWords("$ lots %  of money")).toBe(3);
  });
})
