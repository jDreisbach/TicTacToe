function birthdayCakeCandles(candles) {
  candles = [4, 4, 3, 4, 2, 1, 2, 1];
  // find the max number in the array
  maxHeight = Math.max(...candles);
  console.log(maxHeight);
  //count how many instances of max number appear in the array
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxHeight) {
      count++;
    }
  }
  console.log(count);
}

birthdayCakeCandles();
