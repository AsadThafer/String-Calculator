const String_calculator = require("./String_calculator");

describe("StringCalculator's test cases", () => {
  test("addition of empty String to be 0 ", () => {
    expect(String_calculator("")).toBe(0);
  });

  test("addition of one numbers to equal the same number", () => {
    expect(String_calculator("7")).toBe(7);
  });

  test("addition of two numbers to equal the sum", () => {
    expect(String_calculator("100, 50")).toBe(150);
  });
  test("addition of negative numbers to give error", () => {
    const f=()=>{String_calculator("-100,-50")}
    expect(f).toThrow( "negatives not allowed -100,-50");
  });
});
