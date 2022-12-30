//! 194. Introduction to DOM
// ? DOM - Document Object Model
// 1. DOM is a tree data structure. Just an API to interact with the HTML document and change it later on demand.
//* 2. 4 types of node. 1. Element 2. Attributes 3. Text 4. Comment
//* 3. HTML -> Node -> DOM Tree(JS object) -> JS DOM Manipulation(Tree Update) -> Show on Browser

//! 195. Window Object in Javascript
//? type of window -> object
// window.location, window.setTimeout, window.document, window.Math
// var accessible in window object but let not accessible in window object. Ex: location, setTimeout, document, Math
// window object is accessible directly from browser

//! 196. Document Object in Javascript
// html = document
// document.body, document.URL, document.head

//! 197. Selectors Part One in Javascript
// select element by -> id, class, tagName, name
//* getElementsByClassName/getElementsByTagName -> htmlCollection
//* getElementsByName -> NodeList

// let title = document.getElementById('title')
// console.log(title);

// let paragraph = document.getElementsByClassName('lead')
// console.log(paragraph);

// let lists = document.getElementsByTagName('li')
// console.log(lists);

// let listItemOne = document.getElementsByName('list-item-one')
// console.log(listItemOne);

//! 198. Selectors Part Two in Javascript
//* querySelectorAll -> NodeList

// let title = document.querySelector('#title')
// console.log(title);

// let paragraph = document.querySelector('.lead')
// console.log(title);

// let paragraphs = document.querySelectorAll('.lead')
// console.log(paragraphs);

// let lists = document.querySelectorAll('li')
// console.log(lists);

// let listsItemOne = document.querySelector('[name^="list-item-one"]')
// console.log(listsItemOne);

//! 199. GetElements Method vs Query Selector in Javascript
//getElementsByTagName -> Html collection
//querySelectorAll -> Node list

// let li1 = document.getElementsByTagName("li"); //Element
// let li2 = document.querySelectorAll("li"); //Node
// console.log(li1.constructor.name);
// console.log(li2.constructor.name);

// let ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.childNodes);

//! 200. How to Traverse DOM Elements in Javascript
// let list = document.getElementById("list");
// let parent = list.parentNodeElement;
// console.log(parent);
// let children = list.children;
// console.log(children);
// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);
// let li = document.querySelector("li");
// console.log(li.nextElementSibling);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

//!201. How to Loop Throw HTML Collections in Javascript
// let listItem = document.getElementsByTagName("li");

// // let listItems = Array.from(listItem);
// // let listItems = Array.prototype.slice.apply(listItem);
// let listItems = [...listItem];

// listItem.forEach((li, ind) => {
//   let text = li.innerHTML;
//   li.innerHTML = `(${ind + 1}) ${text}`;
// });
