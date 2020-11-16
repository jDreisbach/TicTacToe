function miniMaxSum(arr) {
  arr = [1, 2, 3, 4, 5];
  //total the sum of all ints in array
  const totalSum = arr.reduce((a, b) => a + b, 0);
  console.log("totalSum  ", totalSum);
  //subtract the largest number of the array from the total sum and store in var min
  const min = Math.max(...arr);
  const maxDiff = totalSum - min;
  console.log("min  ", min);
  //subtract the smalles number in the array from the total sum and store in var max
  const max = Math.min(...arr);
  const minDiff = totalSum - max;
  console.log("max  ", max);
  // lay them side by side in the answer
  const answer = maxDiff + " " + minDiff;
  console.log("answer  ", answer);
  //return the answer
  return answer;
}

miniMaxSum();
