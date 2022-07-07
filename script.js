const submit = document.querySelector("#submit");
const rating = document.querySelector("#rating");
const thanks = document.querySelector("#thanks");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const numbers = document.querySelector(".number");
let outof = document.querySelector("#outof");

let numOfStars = 0;

/*for (let num of numbers) {
  num.addEventListener("click", () => {
    numOfStars = num[i] + 1;
  });
}*/

one.addEventListener("click", () => {
  numOfStars = 1;
  console.log(numOfStars);
});
two.addEventListener("click", () => {
  numOfStars = 2;
  console.log(numOfStars);
});
three.addEventListener("click", () => {
  numOfStars = 3;
  console.log(numOfStars);
});
four.addEventListener("click", () => {
  numOfStars = 4;
  console.log(numOfStars);
});
five.addEventListener("click", () => {
  numOfStars = 5;
  console.log(numOfStars);
});

console.log(numOfStars);

submit.addEventListener("click", () => {
  console.log(numOfStars);
  if (numOfStars > 0) {
    rating.style.visibility = "hidden";
    thanks.style.visibility = "visible";
    thanks.style.transform = "scale(1)";
  }
  outof.innerText = "You selected " + numOfStars + " out of 5";
});
