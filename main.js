console.log("========");

console.log("Working");
const boxels = document.getElementsByClassName("box");
const btnEl = document.getElementsByClassName("btnchange")[0];
const mainbox = document.getElementById("main");
const btnadd = document.getElementsByClassName("btnnemeh")[0];
const btnhas = document.getElementsByClassName("btnhasah")[0];
const newBox = document.createElement("div");
btnadd.addEventListener("click", () => {
  const newBox = document.createElement("div");
  newBox.className = "box";
  mainbox.appendChild(newBox);
});
btnhas.addEventListener("click", () => {
  mainbox.removeChild;
});
function generatecolor() {
  const rcolor = Math.floor(Math.random() * 256);
  const gcolor = Math.floor(Math.random() * 256);
  const bcolor = Math.floor(Math.random() * 256);
  // return "rgb(" + rcolor + ", " + gcolor + "," + bcolor + ") ";
  return `rgb(${rcolor}, ${gcolor}, ${bcolor})`;
}
function changebackgroundcolor() {
  console.log("changed");
  for (let i = 0; i < boxels.length; i++) {
    boxels[i].style.backgroundColor = generatecolor();
  }
}
btnEl.addEventListener("click", changebackgroundcolor);
