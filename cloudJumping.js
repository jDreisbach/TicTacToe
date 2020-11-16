let numClouds = 7;
// let types = 0, 0, 1, 0 ,0, 1 ,0;

types = types.split(" ");
console.log(types);

let count = 0;

for (let i = 0; i < numClouds; i++, count++) {
  let type = parseInt(types[i]);
  let nextCloud = types[i + 1];
  let doubleJump = types[i + 2];

  if (doubleJump == 0) {
    count++;
    i += 2;
  } else if (nextCloud == 0) {
    count++;
    i++;
  } else console.log("you lose");
}
console.log("count,  ", count + 1);
