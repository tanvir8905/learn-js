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
// getElementsByClassName/getElementsByTagName -> htmlCollection
// getElementsByName -> NodeList

// let title = document.getElementById('title')
// console.log(title);

// let paragraph = document.getElementsByClassName('lead')
// console.log(paragraph);

// let lists = document.getElementsByTagName('li')
// console.log(lists);

// let listItemOne = document.getElementsByName('list-item-one')
// console.log(listItemOne);