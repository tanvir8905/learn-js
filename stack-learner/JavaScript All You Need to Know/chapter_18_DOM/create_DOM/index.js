//! 202. Create DOM Elements in Javascript
let btn = document.getElementById("add");
btn.addEventListener("click", function (e) {
  let list = document.getElementById("list");
  let li = document.createElement("li");
  li.innerHTML = "New Element";
  list.appendChild(li);
});
