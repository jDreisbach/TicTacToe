let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
ar.sort();
console.log(ar);
function sockMerchant() {
  //declare count variable that will later increment when a match is paired
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      i++;
      count++;
    }
  }
  console.log(count);
}

sockMerchant();
