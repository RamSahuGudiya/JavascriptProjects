"use strict";

// const person = {
//   name: "John Doe",
//   age: 30,
//   locations: ["New York", "Los Angeles", "Chicago"],
//   hobbies: ["Reading", "Swimming", "Cycling"],
//   email: "johndoe@example.com",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     zip: "10001",
//   },
// };

// const arr = [7, 8, 9];
// const arr1 = [4, 5, 6];

// console.log(arr[0], arr[1], arr[2]);
// console.log(...arr);

// const arrMerge = arr.concat(arr1);
// console.log(arrMerge);

// const newArr = [1, 2, 3, ...arr];

// const technologies = [
//   prompt(`enter first skill`),
//   prompt(`second skill`),
//   prompt(`Third skill`),
// ];
// console.log(technologies);

// person.summary(...technologies);

// const arr = [7, 8, 9];

// const newArr = [1, 2, arr[0], arr[1], arr[2]];

// console.log(newArr);

// const newArr1 = [1, 2, ...arr];
// console.log(newArr1);

// const newPersonArr = [...person.hobbies, "gocci"];

// console.log(newPersonArr);

// const personProfile = [...person.hobbies, ...person.locations];

// console.log(personProfile);

console.log(); // const header = document.querySelector(".header");

// // console.log(document.documentElement);
// // console.log(document.head);

// // console.log(document.body);

// const message = document.createElement("div");
// message.classList.add("pump");
// message.textContent = "i created this element using js";
// message.innerHTML = `Accept the cookies <button class = "cookie">Click</button>`;
// header.prepend(message);

// // header.append(message.cloneNode(true));
// const btn = document.querySelector(".cookie");

// btn.addEventListener("click", function () {
//   message.remove();
// });

// const header = document.querySelector(".header");

// const newElement = document.createElement("div");

// console.log(newElement);

// newElement.classList.add("something");

// newElement.innerHTML = `Please accept cookies <button class = "btn">CLICK</button>`;

// header.prepend(newElement);
// // header.append(newElement.cloneNode(true));s

// const button = document.querySelector(".btn");

// console.log(header);
// button.addEventListener("click", function () {
//   newElement.remove();
// });

// //styles

// newElement.style.backgroundColor = "#A1D6B2";
// // newElement.style.fontSize = "25px";
// // newElement.style.height = "50px";

// console.log(newElement.style.backgroundColor);
// console.log(newElement.style.height);
// console.log(newElement.style.color);

// //to get styles from scc file
// console.log(getComputedStyle(newElement).color);
// console.log(getComputedStyle(newElement).fontFamily);
// console.log(getComputedStyle(newElement).height);

// newElement.style.height =
//   Number.parseInt(getComputedStyle(newElement).height) + 40 + "px";
// //get attributes
// const image = document.querySelector(".img");
// console.log(newElement.className);
// console.log(image.alt);
// console.log(image.developer);
// console.log(image.getAttribute("developer"));
// console.log(image.src);
// console.log(image.getAttribute("src"));
// image.setAttribute("designer", "sunnny");

// console.log(image.dataset.versionNumber);

// var fname = "name";

// console.log(fname);

// function hostingFun() {
//   let fname = "Ram";
//   if (true) {
//     console.log(fname);
//   }
// }

// hostingFun();

// const header = document.querySelector(".header");

// const message = document.createElement("div");
// message.classList.add("cookies");
// // message.textContent = "Please accept cookies";
// message.innerHTML = `please accept the cookies<button class = "btn">Click</button>`;

// header.append(message);
// // header.prepend(message.cloneNode(true));
// console.log(message);

// const button = document.querySelector(".btn");
// button.addEventListener("click", function () {
//   message.remove();
// });

// message.style.fontSize = "20px";
// message.style.backgroundColor = "#ED3EF7";

// console.log(message.style.fontSize);
// console.log(message.style.backgroundColor);
// console.log(message.style.height);
// console.log(message.style.borderRadius);

//computed styles
// console.log(getComputedStyle(message).borderRadius);

// console.log(getComputedStyle(message).height);
// message.style.height = "40px";
// const img = document.querySelector(".img");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   const rand = Math.trunc(Math.random() * 3) + 1;
//   img.src = `image-${rand}.jpg`;
// });

// const rand = Math.trunc(Math.random() * 11) + 20;
// console.log(rand);

// const menu = ["susi", "Garlic Bread", "Pizza", "spagatti"];

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1}: ${item}`);
// }

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat"];

// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`Day-${7 - 2}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours,

//   order(arg1, arg2) {
//     return [this.categories[arg1], this.categories[arg2]];
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`made with ${ing1} ,${ing2} and ${ing3}`);
//   },
// };

// console.log(restaurant.order(1, 2));

// const ingrediance = ["soyya", "capsikam", "salt"];
// restaurant.orderPasta(...ingrediance);

//Iterating an object using keys
// const properties = Object.keys(openingHours);

// let openStr = `The restaurant is only open on ${properties.length} days`;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day} ,`;
// }

// console.log(openStr);

//Iterating by using Values

// const valObj = Object.values(openingHours);
// console.log(valObj);

// const person = {
//   fname: "Ram",
//   age: 23,
//   occupation: "developer",
// };

// const objVal = Object.values(person);
// console.log(objVal);

//Iterating Whole Object

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [keys, { open, close }] of entries) {
//   console.log(`on ${keys} we are ${open} at and ${close}`);
// }

// const arr = [1, 2, 3, 4, 1, 2, 3, 4];
// const newArr = [...new Set(arr)];
// console.log(newArr);

// const ele = document.getElementsByClassName("child");
// console.log(ele);

// const eleTag = document.getElementsByTagName("div");
// console.log(eleTag);

// const allEle = document.querySelectorAll(".child");
// console.log(allEle);

// const uniqueEle = document.getElementById("child");
// console.log(uniqueEle);

// const uniqueEle1 = document.querySelector(".child");
// console.log(uniqueEle1);

// console.log(document.getElementsByClassName("child"));

// document.getElementsByTagName();
// console.log(document.getElementsByTagName("div"));

// document.getElementById();
// console.log(document.getElementById("child"));
// document.querySelector();

// document.querySelectorAll();

// const valEle = document.querySelector(".child");

// const chill = document.querySelector(".chill");

// console.log(chill);

// chill.innerHTML = `<h1>hello<h1>`;

// const valEle = document.querySelector("nav");
// console.log(valEle.textContent);

// const heading = document.querySelector(".header");

// const message = document.createElement("div");
// console.log(message);
// message.classList.add("message");

// message.innerText = `Please accept the cookies`;

// message.innerHTML = `please accept the cookies
// <button class = "btn">Click</button>
// `;

// console.log(message);

// heading.append(message);

// const button = document.querySelector(".btn");
// button.addEventListener("click", function () {
//   message.remove();
// });

// //styles

// newElement.style.backgroundColor = "#A1D6B2";
// // newElement.style.fontSize = "25px";
// // newElement.style.height = "50px";

// console.log(newElement.style.backgroundColor);
// console.log(newElement.style.height);
// console.log(newElement.style.color);

// //to get styles from scc file
// console.log(getComputedStyle(newElement).color);
// console.log(getComputedStyle(newElement).fontFamily);
// console.log(getComputedStyle(newElement).height);

// newElement.style.height =
//   Number.parseInt(getComputedStyle(newElement).height) + 40 + "px";
// //get attributes
// const image = document.querySelector(".img");
// console.log(newElement.className);
// console.log(image.alt);
// console.log(image.developer);
// console.log(image.getAttribute("developer"));
// console.log(image.src);
// console.log(image.getAttribute("src"));
// image.setAttribute("designer", "sunnny");

// console.log(image.dataset.versionNumber);

//styles

// const header = document.querySelector(".header");

// const message = document.createElement("div");
// // message.textContent = `Please accept the cookies <button>Click</button>`;
// message.classList.add("cookie");

// message.innerHTML = `Please accept the cookies <button class = "btn">Click</button>`;

// header.prepend(message);
// header.append(message.cloneNode(true

// ));

// const button = document.querySelector(".btn");

// button.addEventListener("click", function () {
//   message.remove();
// });

// const ele = document.querySelector(".img");

// console.log(ele.src);
// console.log(ele.getAttribute("src"));

// Selecting the input, todo list, and add button
// const taskInput = document.getElementById("task-input");
// const todoList = document.getElementById("todo-list");
// const addTaskBtn = document.getElementById("add-task-btn");

// Array to store tasks
// let tasks = [];

// // Function to add a new task
// // Event listener for adding a new task
// addTaskBtn.addEventListener("click", function () {
//   const newTask = taskInput.value.trim(); // Get input value and remove whitespace
//   if (newTask !== "") {
//     tasks.push(newTask);
//     taskInput.value = ""; // Clear the input field
//     renderTasks(); // Re-render the list
//   }
// });

// // Function to render tasks
// function renderTasks() {
//   todoList.innerHTML = ""; // Clear the list before rendering

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.textContent = task;

//     // Add remove button to each task
//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.classList.add("remove-btn");

//     li.appendChild(removeBtn);
//     todoList.appendChild(li);
//     removeBtn.addEventListener("click", () => {
//       removeTask(index);
//     });

//   });
// }

// // Function to remove a task
// function removeTask(index) {
//   tasks.splice(index, 1);
//   renderTasks(); // Re-render the list
// }

// let tasks = [];

// addTaskBtn.addEventListener("click", function () {
//   const newTask = taskInput.value.trim();
//   if (newTask !== "") {
//     tasks.push(newTask);
//     taskInput.value = "";
//     console.log(tasks);
//     renderList();
//   }
// });

// document.addEventListener("keydown", function (e) {
//   const newTask = taskInput.value.trim();
//   if (e.key === "Enter" && newTask !== "") {
//     tasks.push(newTask);
//     taskInput.value = "";
//     renderList();
//     console.log(tasks);
//   }
// });

// function renderList() {
//   todoList.innerHTML = "";
//   console.log(todoList);
//   tasks.forEach((task, index) => {
//     // creating a list element and append task
//     const li = document.createElement("li");
//     li.textContent = task;

//     //creating a button for the list
//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.classList.add("remove-btn");
//     li.appendChild(removeBtn);
//     todoList.appendChild(li);
//     console.log(todoList);

//     removeBtn.addEventListener("click", function () {
//       removeItem(index);
//     });
//   });
// }

// function removeItem(index) {
//   tasks.splice(index, 1);
//   renderList();
// }

//input field
const inputTask = document.querySelector("#task-input");
//input button
const taskBtn = document.querySelector("#add-task-btn");
//unordered list
const todoList = document.querySelector("#todo-list");

const tasks = [];

function addingNewTodo() {
  const newTask = inputTask.value.trim();
  if (newTask !== "") {
    tasks.push(newTask);
    console.log(tasks);
    renderTask();
    inputTask.value = "";
  }
}

taskBtn.addEventListener("click", addingNewTodo);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addingNewTodo();
  }
});

function renderTask() {
  //clearing a todolist before rendering
  todoList.innerHTML = "";
  tasks.forEach(function (task, index) {
    //creating list element
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task}`;
    //creating a remove btn in list
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    //appending elements to the ul
    li.appendChild(removeBtn);
    todoList.appendChild(li);
    console.log(todoList);

    //removing element
    removeBtn.addEventListener("click", function () {
      removeList(index);
    });
  });
}

function removeList(index) {
  tasks.splice(index, 1);
  renderTask();
  console.log(index);
}
