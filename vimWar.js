arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

var n = arr.length;
let sum = 0;
console.log(n);
for (let i = 0; i < n; i++) {
  sum += arr[i][i];
  sum -= arr[i][n - 1 - i];
}
console.log("left  ", sum);

console.log(Math.abs(sum));
