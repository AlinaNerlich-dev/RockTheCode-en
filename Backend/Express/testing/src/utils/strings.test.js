const { getWithoutSpaces, removeWord } = require("./strings");

describe("String utilities", () => {
  it("returns a string without spaces", () => {
    const result = getWithoutSpaces("Hello from vscode");
    expect(result).toBe("Hellofromvscode");
  });

  it("returns a string without a word passed as a parameter", () => {
    const result = removeWord("Hello from vscode", "Hello");
    expect(result).toBe("from vscode");
  });
});
