const helloBtn = document.getElementById("hello");
const goodbyeBtn = document.getElementById("goodbye");

const sayHi = () => {
  alert("Hello!");
};

helloBtn.addEventListener("click", sayHi);

const cb = () => {
  console.log("Goodbye!");
};

const getAway = (snowBall) => {
  snowBall();
};

goodbyeBtn - addEventListener("click", () => getAway(cb));

//? By doing this, we are gonna get the second function and then the first one.

//* const function1 = () => {
//*   setTimeout(() => {
//*     console.log("I'm the first function.");
//*   }, 1000);
//* };

//* const function2 = () => {
//*   console.log("I'm the second function.");
// };

//* function1();
//* function2();

const function3 = (functions) => {
  setTimeout(() => {
    console.log("I am the first function.");
    functions();
  }, 1000);
};

const function4 = () => {
  console.log("I am the second function");
};

function3(function4);
