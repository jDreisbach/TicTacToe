let message = "abccdeeefg";

let newMessage = "";
let count = 0;
function compressedString() {
  for (let i = 0; i < message.length; i++) {
    count++;
    if (message[i] != message[i + 1]) {
      if (count == 1) {
        newMessage += message[i];
        count = 0;
      } else {
        newMessage += message[i] + count;
        count = 0;
      }
    }
  }
  console.log(newMessage);
}

compressedString();
