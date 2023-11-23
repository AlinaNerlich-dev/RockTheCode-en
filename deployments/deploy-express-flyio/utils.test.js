const { removeSpacesAndReplace } = require("./utils");

describe("remove spaces and replace function", () => {
  it("returns a string with the spaces replaced by the replacer", () => {
    const result = removeSpacesAndReplace("This is a test string", "_");
    expect(result).toBe("This_is_a_test_string");
  });
  it("returns a string with the spaces replaced by the replacer", () => {
    const result = removeSpacesAndReplace("This is a test string", "*");
    expect(result).toBe("This*is*a*test*string");
  });
});
