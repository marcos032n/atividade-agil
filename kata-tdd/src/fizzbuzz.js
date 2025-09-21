function fizzbuzz(numero) {
  if (numero % 15 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero.toString();
}

module.exports = fizzbuzz;
