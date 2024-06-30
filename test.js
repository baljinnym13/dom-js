console.log("Working");
console.log("Working");

const textEl = document.getElementById("text");

const myElement = document.createElement("h1");

myElement.textContent = "Pinecone LLC";

document.getElementById("test").appendChild(myElement);

console.log(myElement);

const els = document.getElementsByClassName("demo");

console.log("EL", els[0].children);

function handleClick() {
  console.log("Button clicked");

  textEl.style.color = "red";

  textEl.style.fontSize = "40px";

  textEl.style.backgroundColor = "yellow";

  textEl.textContent = "Pinecone LLC";

  textEl.innerText = "<h1>Pinecone Company</h1>";

  textEl.innerHTML = "<h1>Pinecone Company</h1>";
}

function change() {
  console.log("Button clicked");
}

const btnEl = document.getElementById("btn");

console.log("=====>", btnEl);

btnEl.addEventListener("click", change);

//==========
// console.log("Working");

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
const btnEL = document.getElementsByTagName("button")[0];
console.log(boxEl);
console.log(btnEL);

const colors = ["green", "yellow", "red"];
let i = 0;

function generateColor() {
  const rColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const gColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const bColor = Math.floor(Math.random() * 256);
  //   return "rgb(" + rColor + "," + gColor + "," + bColor + ")"; //
  return `rgb(${rColor},${gColor},${bColor})`;
}

function changeBackgroundColor() {
  boxEl.style.backgroundColor = generateColor();

  //   boxEl.style.backgroundColor = colors[i];
  //   i++;
  //   if (i === colors.length) {
  //     i = 0;
  //   }
}

btnEL.addEventListener("click", changeBackgroundColor);
//===-=-=0-988

// console.log("Working");

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
const btnEL = document.getElementsByTagName("button")[0];
console.log(boxEl);
console.log(btnEL);

const colors = ["green", "yellow", "red"];
let i = 0;

function generateColor() {
  const rColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const gColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const bColor = Math.floor(Math.random() * 256);
  //   return "rgb(" + rColor + "," + gColor + "," + bColor + ")"; //
  return `rgb(${rColor},${gColor},${bColor})`;
}

function changeBackgroundColor() {
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = generateColor();
  }
}

btnEL.addEventListener("click", changeBackgroundColor);

// add box
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const newBox = document.createElement("div");
  newBox.className = "box";
  const parent = document.getElementsByClassName("boxes")[0];
  parent.appendChild(newBox);
});

// change box dimension
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
  console.log("WORK");
  console.log(boxEl.classList);

  boxEl.classList.toggle("big");
});

// audio

const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  //play song
  const audio = document.getElementsByTagName("audio")[0];
  audio.src = "";
  audio.play();
  console.log("AUD", audio);
});
