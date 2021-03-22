// function check_Pel(temp) {
//   const dontdes = temp;
//   const temp1 = temp.split("");
//   const newtemp = temp1.reverse();
//   console.log("original : " + temp);
//   console.log(temp1);
//   console.log(newtemp);
//   //   if (newtemp === temp1) {
//   //     console.log("newtemp " + newtemp);
//   //     console.log("temp1.reverse() " + temp1);
//   //     return true;
//   //   } else return false;
// }
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("add words?", (name) => {
//   console.log(` ${check_Pel(name)}!`);
// });

function doessomething(test_var1) {
  if (test_var1.split() === test_var1.split().reverse) {
    console.log("test_var1 split " + test_var1.split());
    console.log("test_var1.reverse() " + test_var1.split().reverse());
    console.log("yeet");
    return true;
  } else {
    console.log("test_var1 split " + test_var1.split());
    console.log("test_var1.reverse() " + test_var1.split().reverse());
    console.log("nope");
    return false;
  }
}

doessomething("mom");
