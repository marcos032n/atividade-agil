const fizzbuzz = require("../src/fizzbuzz");

test("Deve retornar Fizz para múltiplos de 3", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test("Deve retornar Buzz para múltiplos de 5", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test("Deve retornar FizzBuzz para múltiplos de 3 e 5", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test("Deve retornar o número quando não for múltiplo de 3 ou 5", () => {
  expect(fizzbuzz(7)).toBe("7");
});
