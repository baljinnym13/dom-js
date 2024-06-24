console.log("========");

// document.getElementById("text").style.color = "red";
// document.getElementById("text").style.fontSize = "40px";
// document.getElementById("text").style.backgroundColor = "yellow";
// // text utga oorchildog domuud
// document.getElementById("text").textContent = "Pinecone LLC";
// // text utga oorchildog zowhon text oruulna
// document.getElementById("text").innerText = "Pinecone company";
// // text , html utga oorchildog
// document.getElementById("text").innerHTML = "Pinecone company html";
// const myelement =
console.log("Working");
// const textEl = document.getElementById("text");
// const myElement = document.createElement("h1");
// myElement.textContent = "Pinecone LLC";
// document.getElementById("test").appendChild(myElement);
// console.log(myElement);
// const els = document.getElementsByClassName("demo");
// console.log("EL", els[0].children);
// function handleClick() {
//   console.log("Button clicked");

//   textEl.style.color = "red";

//   textEl.style.fontSize = "40px";

//   textEl.style.backgroundColor = "yellow";

//   textEl.textContent = "Pinecone LLC";

//   textEl.innerText = "<h1>Pinecone Company</h1>";

//   textEl.innerHTML = "<h1>Pinecone Company</h1>";
// }

// function change() {
//   console.log("Button clicked");
// }
// const btnEl = document.getElementById("btn");
// console.log("=====>", btnEl);
// btnEl.addEventListener("click", change);

const boxEl1 = document.getElementsByClassName("box1")[0];
const boxEl2 = document.getElementsByClassName("box2")[0];
const boxEl3 = document.getElementsByClassName("box3")[0];
const boxEl4 = document.getElementsByClassName("box4")[0];
const boxEl5 = document.getElementsByClassName("box5")[0];
const boxEl6 = document.getElementsByClassName("box6")[0];
const boxEl7 = document.getElementsByClassName("box7")[0];
const boxEl8 = document.getElementsByClassName("box8")[0];
const boxEl9 = document.getElementsByClassName("box9")[0];
const btnEl = document.getElementsByClassName("btn")[0];
const colors = ["green", "yellow", "red", "blue", "gray"];
let i = 0;

function generatecolor() {
  const rcolor = Math.floor(Math.random() * 256);
  const gcolor = Math.floor(Math.random() * 256);
  const bcolor = Math.floor(Math.random() * 256);
  // return "rgb(" + rcolor + ", " + gcolor + "," + bcolor + ") ";
  return `rgb(${rcolor}, ${gcolor}, ${bcolor})`;
}
function changebackgroundcolor() {
  console.log("changed");
  boxEl1.style.backgroundColor = generatecolor();
  boxEl2.style.backgroundColor = generatecolor();
  boxEl3.style.backgroundColor = generatecolor();
  boxEl4.style.backgroundColor = generatecolor();
  boxEl5.style.backgroundColor = generatecolor();
  boxEl6.style.backgroundColor = generatecolor();
  boxEl7.style.backgroundColor = generatecolor();
  boxEl8.style.backgroundColor = generatecolor();
  boxEl9.style.backgroundColor = generatecolor();
  // const rcolor = Math.floor(Math.random() * 256);
  // const gcolor = Math.floor(Math.random() * 256);
  // const bcolor = Math.floor(Math.random() * 256);
  // boxEl.style.backgroundColor =
  //   "rgb(" + rcolor + ", " + gcolor + "," + bcolor + ") ";
  // boxEl.style.backgroundColor = colors[i];
  // i++;
  // if (i === colors.length) {
  //   i = 0;
  // }
}

btnEl.addEventListener("click", changebackgroundcolor);
