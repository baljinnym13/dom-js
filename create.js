const btncreate = document.getElementsByClassName("btn")[0];
function creatediv() {
  const div = document.createElement("div");
  div.className = "box";
  div.textContent = "create div";
  document.getElementsByTagName("body").appendChild("body");
}
btncreate.addEventListener("click", creatediv);
