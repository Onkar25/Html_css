let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.querySelector("h1").innerHTML = " I am single clicked";
});

btn.addEventListener("dblclick", () => {
  document.querySelector("h1").innerHTML = " I am double clicked";
});

btn.addEventListener("mouseenter", () => {
  document.querySelector("h1").innerHTML = " I am  mouse enter";
});

btn.addEventListener("mouseout", () => {
  document.querySelector("h1").innerHTML = " I am  mouse out";
});
document.addEventListener("contextmenu", () => {
  document.querySelector("h1").innerHTML = " Don't right Click to hack";
});

document.addEventListener("keydown", (e) => {
  document.querySelector("h1").innerHTML = `${e.key} is preesed`;
});
