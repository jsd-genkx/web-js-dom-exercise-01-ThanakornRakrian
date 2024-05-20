let textId = document.getElementById("text");
let btnId = document.getElementById("btn");
let btnChangeId = document.getElementById("btn-change");
let divHId = document.getElementById("div-h1");
// let divHId = document.querySelector('#div-h1');

function changeText() {
  textId.innerHTML = "Hello JavaScript InnerHTML!";
}

btnId.addEventListener("click", () => {
  changeText();
});

function changeColor() {
  textId.style.color = "#A87676";

  btnId.style.background = "#CA8787";
  btnId.style.borderRadius = "1em";
  btnId.style.padding = "1.5em";
  btnId.style.marginTop = "8em";
  btnId.style.marginBottom = "2em";
  btnId.style.width = "50%";
  btnId.style.color = "#fff";

  btnChangeId.style.background = "#FFD0D0";
  btnChangeId.style.borderRadius = "1em";
  btnChangeId.style.padding = "1.5em";
  btnChangeId.style.width = "50%";

  document.querySelector("body").style.display = "flex";
  document.querySelector("body").style.justifyContent = "center";
  document.querySelector("body").style.alignItems = "center";
  document.querySelector("body").style.flexDirection = "column";
  document.querySelector("body").style.background = "#FCFFE0";

  divHId.style.textAlign = "center";
}

btnChangeId.addEventListener("click", () => {
  changeColor();
});
