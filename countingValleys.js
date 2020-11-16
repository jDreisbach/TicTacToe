let steps = 8;
let path = "UDDDUDUU";

// path looks like this

//   _      /\_
//    \    /
//     \/\/

//there is one main valley the answer should return an integer of 1;
// i think the best way to look at this would be as a number line with sea-level as 0 and track the index

//first we need to parse the path string into an array of individual strings ['D', 'D', 'U', 'D', 'U', 'U', 'U', 'D'] in this boilerplate example
path = [...path];

function countingValleys() {
  //set the initial path at sea level (0)
  let alt = 0;
  //we will track how many times the value of the path is zero with a count variable
  let count = 0;
  //lets create a new array to track the altitudes that have been visited
  let track = [];
  //we will loop through the path array and check our positioning of altitude
  for (let i = 0; i < steps; i++) {
    //we will check the direction of our movements
    if (path[i] === "D") {
      alt--;
      track.push(alt);
    } else if (path[i] === "U") {
      alt++;
      track.push(alt);
    }
    let prev = track[i - 1];
    //now we will count how many times we have entered sea level from below sea level by looping through the track array
    if (prev < 0 && track[i] === 0) {
      count++;
    }
  }

  console.log(count);
}

countingValleys();
