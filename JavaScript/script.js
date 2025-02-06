// Actual code implementation
let cont = document.body;
// console.log(cont);

// cont.firstElementChild.style.backgroundColor = "red";
// cont.firstElementChild.style.color = "white";

// cont.lastElementChild.style.backgroundColor = "black";
// cont.lastElementChild.style.color = "cyan";
// console.log(cont.children);
// console.log(cont.firstElementChild.childNodes); // includes Text Node and comment nodes
// console.log(cont.firstElementChild.children); // Contains only html main elements
// console.log(cont.firstElementChild.children[1]);
// console.log(cont.firstElementChild.children[1].nextElementSibling);
// console.log(cont.firstElementChild.children[1].nextSibling);
// console.log(cont.firstElementChild.children[3].previousElementSibling);
// console.log(cont.firstElementChild.children[3].previousSibling);

//Table
// console.log(cont.children[1]);
// console.log(cont.children[1].rows);

// Elements by Id's
// console.log(document.getElementsByClassName("box"));
// document.getElementById("redBox").style.backgroundColor = "red";

// getElementById is particular for single element because ID cannot be repeated

// Whereas getElementsByClassName is particular for multiple elements because class name can be repeated

// Query Selector
// console.log(document.querySelectorAll(".box"));
// document.querySelector(".box").style.backgroundColor = "yellow";
// // document.querySelectorAll(".box").style.backgroundColor = "yellow"; //  Not Allowed
// document
//   .querySelectorAll(".box")
//   .forEach((e) => (e.style.backgroundColor = "yellow"));

// // Tag Name

// console.log(document.getElementsByTagName("div"));

// Closet and Matches
// let e = document.getElementsByTagName("div");
// console.log(document.getElementsByTagName("div"));
// console.log(e[3].matches("#redBox"));
// console.log(e[3].closest("#redBox"));
// console.log(document.querySelector(".container").contains(e[1]));

// Inner/Outer HTML and Text and some extra properties
// console.log(document.querySelector(".container").innerHTML);
// console.log(document.querySelector(".container").outerHTML);
// console.log(document.querySelector(".container").innerText);
// console.log(document.querySelector(".container").tagName);
// console.log(document.querySelector(".container").nodeName);
// console.log(document.querySelector(".container").textContent);
// document.querySelector(".container").hidden = true;
// console.log(document.querySelector(".container").hasAttribute("style"));
// console.log(document.querySelector(".container").getAttribute("style"));
// document
//   .querySelector(".container")
//   .setAttribute("style", "background-color: red");
// console.log(document.querySelector(".container").attributes);

// IMPORTANT
// document.designMode = "on";

// Insert and remove
// let div = document.createElement("div");
// div.innerHTML = "I have been created by <b> Crooks </b>";
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
// console.log(document.querySelector(".container").classList);
// console.log(document.querySelector(".container").className);

// https://www.youtube.com/watch?v=mCx5aSEK8YE&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=72
