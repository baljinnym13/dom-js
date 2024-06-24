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

const boxEl = document.getElementsByClassName("box")[0];
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
  boxEl.style.backgroundColor = generatecolor();
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
