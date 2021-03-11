const {
  calculateTotalWithTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  add,
} = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTotalWithTip(100, 0.1);
  expect(total).toBe(110);
});

test("Should calculate total with default value", () => {
  const total = calculateTotalWithTip(100);
  expect(total).toBe(120);
});

test("should convert 32 F to 0 C", () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test("should convert 0 C to 32 F", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test("async test demo", (done) => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  });
});

test("Should add two numbers", (done) => {
  add(2, 3).then((res) => {
    expect(res).toBe(5);
    done();
  });
});

// test("should add two numbers using async /await", async () => {
//   const sum = await add(2, 4);
//   expect(sum).toBe(6);
// });
