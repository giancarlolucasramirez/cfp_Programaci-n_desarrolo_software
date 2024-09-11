for (let n = 1; n <= 100; n++) {
  let fizz_buzz = "";
  if (n % 3 == 0) fizz_buzz += "Fizz";
  if (n % 5 == 0) fizz_buzz += "Buzz";
  console.log(fizz_buzz || n);
}