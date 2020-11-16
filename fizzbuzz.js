for (i = 1; i <= 100; i++) {
  //     if (i%15 === 0) {
  //     console.log ("FizzBuzz");
  // }
  //     else if (i%3 === 0) {
  //     console.log ("Fizz");
  // }
  //     else if (i%5 === 0) {
  //     console.log("Buzz");
  // }

  //     else {
  //     console.log(i);
  // }

  //   console.log(
  //     i % 15 === 0 ? "fizzbuzz" : i % 3 === 0 ? "fizz" : i % 5 === 0 ? "buzz" : i
  //   );

  for (i = 0; ++i < 101; )
    console.log([i, "Fizz", "Buzz", "FizzBuzz"][!(i % 3) + !(i % 5) * 2]);
}
