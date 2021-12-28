const dividingPartOne = (num1, num2, cb) => {
  num1 === 0 && cb(new Error("You cannot divide by zero!"));
  num2 === 0 && cb(new Error("You cannot divide by zero!"));
  cb(null, num1 / num2);
};

dividingPartOne(48, 2, (error, result1) => {
  if (error) {
    throw error;
  } else {
    console.log(result1);
  }
});

const dividingPartTwo = (num3, num4, cb2) => {
  if (num3 === 0) {
    cb2(console.log("On ,no!"));
  } else if (num4 === 0) {
    cb2(console.log("Oh, no!"));
  } else {
    cb2(null, num3 / num4);
  }
};

dividingPartTwo(10, 0, (error, result2) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result2);
  }
});
