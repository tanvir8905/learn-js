//! 176. What is Asynchronous Programming in Javascript
//* synchronous - do one thing at a time

//* asynchronous - not do one thing at a time. can do multiple things at once and don't have to wait for the current in order to move on to the next one

// console.log('I am line 1');
// console.log('I am line 2');
// console.log('I am line 3');
// console.log('I am line 4');
// console.log('I am line 5');

// setTimeout(() => {
//     console.log('I have done')
// }, 1000)

// console.log('I am line 1');

// setTimeout(() => {
//     console.log('I am line 2');
// }, 3000)

// setTimeout(() => {
//     console.log('I am line 3');
// }, 0)

// console.log('I am line 4');


// setTimeout(() => {
//     console.log('I am line 5');
// }, 1000)

//! 178. How to Store Result from Async Function in Javascript
// function sayMyName(name) {
//     setTimeout(() => {
//         console.log(name)
//     }, 3000)
// }

// let output = sayMyName('Tanvir')
// console.log(output);

//! 179. Why does Javascript Act Like Asynchronous
//* JavaScript is a single threaded programming language. Which means that JavaScript do one task at a time

//? JavaScript use 2 DSA
//* 1. HEAP to manage variables
//* 2. Stack to manage function calls

//! 180. How JS Handle Asynchronous

//* single threaded programming language but feels like multi-threaded programming language

//* Async call on V8 engine - call stack -> web api -> callback/task queue -> event loop -> call stack

//! 181. v8 Engine in Javascript
//* v8 Engine - written in C++ and a Javascript engine. Compile and execute JavaScript codes.

//? V8 engine do --->
//* 1. handle call stack
//* 2. handle heap memory
//* 3. collect garbage
//* 4. provide data type, operators, object and functions

//? V8 engine not do --->
//* 1. not handle DOM
//* 2. Multiple V8 engine never shares variables or context

//! 182. How to Handle Asynchronous Tasks in Javascript
//? There are mainly three ways to handle asynchronous tasks
//* 1. Call back
//* 2. Promise
//* 3. Async function/ async await

//? handle collection on async operations
//* 1. async iterator
//* 2. for await of loop
//* 3. async generator

//! 183. What is Ajax
//* Ajax - asynchronous javascript and XML(JSON) -> Get data on JSON formate now vai URL request. It's a web api

//! 184. Ajax with Callback in Javascript
// const xhr = new XMLHttpRequest()
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function (e) {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             let users = JSON.parse(xhr.response)
//             console.log(users)
//         } else {
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()


//? callback apply - usable for multiple times call

// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             } else {
//                 callback(xhr.status, null)
//             }
//         }
//     }

//     xhr.send()
// }

// getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//         res.forEach(r => alert(r.name))
//     }
// })

// getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//         res.forEach(r => console.log(r.title))
//     }
// })

//! 185. Callback Not Always Asynchronous in Javascript
// let arr = [1, 2, 3, 4];

//? all callback are not asynchronous
// let sqrArr = arr.map(a => a * a)
// console.log(sqrArr);

//? web api is asynchronous
// function asyncMap(arr, cb) {
//     return arr.map(v => {
// setTimeout(cb.bind(null, v), 0);
//         setTimeout(() => cb(v), 0);
//     })
// }

// let cbArr = asyncMap(arr, v => {
//     console.log(v)
// })

//! 186. Why Not Callback in Javascript
// function getRequest(url, callback) {
//         const xhr = new XMLHttpRequest()
//         xhr.open('get', url)

//         xhr.onreadystatechange = function (e) {
//                 if (xhr.readyState === 4) {
//                         if (xhr.status === 200) {
//                                 let response = JSON.parse(xhr.response)
//                                 callback(null, response)
//                         } else {
//                                 callback(xhr.status, null)
//                         }
//                 }
//         }

//         xhr.send()
// }

// const BASE_URL = 'https://jsonplaceholder.typicode.com'
// getRequest(`${BASE_URL}/post/1`, (err, res) => {
//         if (err) throw new Error('Error occurred')
//         let { userId } = res;

//         getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
//                 if (err) throw new Error('Error occurred')

//                 getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res) => {
//                         if (err) throw new Error('Error occurred')
//                         console.log(res);
//                 })
//         })
// })

//! 187. Introduction to Promise in Javascript
//* resolve, reject both are function
// let p1 = new Promise((resolve, reject) => {
//         setTimeout(resolve, 5000, 'one')
// })

// let p2 = new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000, 'two')
// })

// console.log(p1)
// console.log(p2)

// p1.then((v) => {
//         console.log(v);
// })

// p2.then((v) => {
//         console.log(v);
// })

// function getIphone(isPassed) {
//         return promise = new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         if (isPassed) {
//                                 resolve('I have got an iphone')
//                         } else {
//                                 reject(new Error('I have failed'))
//                         }
//                 }, 2000);
//         });
// }

// console.log(getIphone(true))
// console.log(getIphone(false))

//* most used past in promise
// getIphone(true)
//         .then((res) => {
//                 console.log(res);
//         }).catch((e) => {
//                 console.log(e.message)
//         })

//! 188. Implement Fetch API in Javascript
//* promise benefit is chaining & promise with next chain relation parent child

// const BASE_URL = 'https://jsonplaceholder.typicode.com'

// fetch(`${BASE_URL}/users/1`)
//         .then(res => res.json())
//         .then(data => {
//                 console.log(data)
//                 return Promise.resolve('something')
//         })
//         .then(str => {
//                 console.log(str)
//                 return Promise.resolve(' Another promise')
//         })
//         .then(another => {
//                 console.log(another)
//         })
//         .catch(err => console.error(err))


//? relation view
// getRequest(function () {
//         getRequest(function () {
//                 getRequest(function () {
//                         getRequest(function () {

//                         })
//                 })
//         })
// })

// const BASE_URL = 'https://jsonplaceholder.typicode.com'

// function getRequest(url) {
//         return new Promise((resolve, reject) => {
//                 const xhr = new XMLHttpRequest()
//                 xhr.open('get', url)
//                 xhr.onreadystatechange = function (e) {
//                         if (xhr.readyState === 4) {
//                                 if (xhr.status === 200) {
//                                         let response = JSON.parse(xhr.response)
//                                         resolve(response)
//                                 } else {
//                                         reject(new Error('Error Occurred'))
//                                 }
//                         }
//                 }
//                 xhr.send()
//         })
// }

// getRequest(`${BASE_URL}/users/1`)
//         .then(data => {
//                 console.log(data);
//         })
//         .then(e => {
//                 console.log(e.message);
//         })

//! 189. Promise API in Javascript
// const delay = s => new Promise((resolve) => setTimeout(resolve, s * 1000))

// delay(2).then(() => console.log('2 seconds delay'))
// delay(1).then(() => console.log('1 seconds delay'))
// delay(3).then(() => console.log('3 seconds delay'))
// delay(2).then(() => console.log('2 seconds delay'))
// delay(5).then(() => console.log('5 seconds delay'))

// let p1 = Promise.resolve('Test')
// p1.then((v) => console.log(v))

// let p2 = Promise.reject('REJECT')
// p2.catch((e) => console.log(e))

// let p1 = Promise.resolve('One')
// let p2 = Promise.resolve('Two')
// let p3 = Promise.resolve('Three')

// let promiseArr = [p1, p2, p3]
// Promise.all(promiseArr)
//     .then(arr => {
//         console.log(arr);
//     })

// let p1 = new Promise( resolve =>{
//     setTimeout(resolve, 5000, 'One')
// })

// let p2 = new Promise( resolve =>{
//     setTimeout(resolve, 3000, 'Two')
// })

// let p3 = new Promise( resolve =>{
//     setTimeout(resolve, 4000, 'Three')
// })

// let promiseArr = [p1, p2, p3]
// Promise.all(promiseArr)
//     .then(arr => console.log(arr))

// Promise.race(promiseArr)
//     .then(v => console.log(v))

//! 190. Async Await in Javascript
// function myPromise(){
//     return Promise.resolve('Test Value')
// }
// console.log(myPromise());

// async function test(){
//     return 'Test';
// }
// test().then(v => alert(v))

// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000, 'Test Value')
// })
// async function myAsyncFunc(){
//     // p1.then(v => console.log(v))
//     let v = await p1
//     console.log(v);
// }
// myAsyncFunc()

// async function fetchData() {
//     try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await res.json()
//         let names = data.map(v => v.name)
//         console.log(names);
//     }catch(e){
//         console.log(e.message);
//     }
// }
// fetchData()

// let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)]
// async function promiseAll(){
//     let result = await Promise.all(promises)
//     console.log(result);
// }

//! 191. Async Iterator in Javascript
// let asyncIterable = {
//     [Symbol.asyncIterator](){
//         let i = 0;
//         return {
//             next() {
//                 if(i<5){
//                     return Promise.resolve({
//                         value: i++,
//                         done: false
//                     })
//                 }else{
//                     return Promise.resolve({
//                         done: true
//                     })
//                 }
//             }
//         }
//     }
// }
// let iterate = asyncIterable[Symbol.asyncIterator]();
// // console.log(iterate.next());
// (async function(){
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
// })()