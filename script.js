// window.onload = function() {
//     // This code will only run when the page has finished loading
//     alert('The website is fully loaded!');
//   };

//   document.addEventListener('DOMContentLoaded', function() {
//     // This code runs when the basic structure of the page has loaded
//     alert('The website structure has loaded!');
//   });

// function getValue() {
//     const username = document.getElementsByClassName("h1");
//     const printUsername = username.value;
//     alert(printUsername);
// }

// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);

// const element = document.getElementById("div1");
// element.appendChild(para);

// create a div
// const newDiv = document.createElement("div");

// // reference div1 element
// const div1element = document.getElementById("div1");

// // made new div a child of div1
// div1element.appendChild(newDiv);

// // create a paragraph
// const newPara = document.createElement("p");

// // give new paragraph a content
// const newContent = document.createTextNode("This is my paragraph");

// // append new content to new paragraph
// newPara.appendChild(newContent);

// // make new paragraph child of new div
// newDiv.appendChild(newPara);

// getting text content

// let p1Text = document.getElementById('p1');
// let displayText = p1Text.textContent
// console.log(displayText);

// let arrayOfAlphabets = ['a', 'b', 'c', 'd', 'e', 'f',
// 'g', 'h', 'i', 'j'];

// for (let alphabet of arrayOfAlphabets) {
//     let upperCaseLetter = alphabet.toUpperCase();
//     console.log(upperCaseLetter)
// }

// const subjectScore = {
//     english: 70,
//     mathematics: 60,
//     chemistry: 50,
//     biology: 80,
//     igbo: 76,
//     calculateAvg: function (){
//         const arrayOfScores = Object.values(subjectScore);
//         for (const score of arrayOfScores) {
//             let totalScore = 0;
//             totalScore =+ score;
//             console.log()
//         }
//     }

// }

// subjectScore.calculateAvg()

/*
1. Inside your html create a ul element and give it an id of list
Using dom manipulation create three list elements and make them children of the
ul element

2. Using dom manipulation, create a div element. Also create a paragraph element
 make it and child of the div and give the paragraph any content of your choice

3. get the content of the paragraph create in question two using the textContent
method and display it in the browser console
*/

// webpage being a collection of nodes
// querySelector is css selector

// const firstList = document.createElement('li');
// const secondList = document.createElement('li');
// const thirdList = document.createElement('li');

// const myUl = document.getElementById('my-ul');
// myUl.appendChild(firstList);
// myUl.appendChild(secondList);
// myUl.appendChild(thirdList);

// const myBody = document.querySelector('body');
// const myDiv = document.createElement('div');
// myBody.appendChild(myDiv);
// const myParagraph = document.createElement('p');
// myDiv.appendChild(myParagraph);
// const paraContent = document.createTextNode("I just created this");
// myParagraph.appendChild(paraContent);

// const displayText = myParagraph.textContent;
// console.log(displayText);

// function customFunction () {
//   alert('hello')
//   document.body.style.backgroundColor = 'red';
// }

// const btn = document.querySelector("button");
// btn.addEventListener("click", customFunction());

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;

//   });

// const body = document.querySelector('body')

//select the children nodes with the <body> element node with the DOM property node.childNodes

// const childrenNodes = body.childNodes

// console.log(childrenNodes)

// click
// mouseover
// keydown

/*

1. push your tic tac toe game to your github with a commit message
2. using dom manipulation, create a div element, add a button as a child
element. Add an event that changes the color of the button when clicked
3. create a paragraph element, give it a content which is the definition of 
event handler and event listener. Make the paragraph a child of the div in question 2.
change the color of the paragraph text.

*/
// const myBody = document.querySelector('#myBtn');
// const myDiv = document.createElement('div');
// myBody.appendChild(myDiv);

// const myBtn = document.createElement('button');
// myDiv.appendChild(myBtn);
// const textNode = document.createTextNode("my new button");
// myBtn.appendChild(textNode);

// myBtn.addEventListener("click", () => {
//   myBtn.style.backgroundColor = 'red';

// });

// let result
// const number = 10;
// const paraDisplay = document.querySelector('#paragraph');

// if (number % 2 !== 0) {
//   result = `${number} is odd`;
// } else {
//   result = `${number} is even`
// }

// const number1 = 30;
// const number2 = 93;
// let compareNum;

// if (number1 > number2) {
//   compareNum = ` and ${number1} is greater than ${number2}`;
// } else {
//   compareNum = ` and ${number2} is greater than ${number1}`
// }

// paraDisplay.textContent = `${result} ${compareNum}`;

// let numbers = [1, 3, 4, 9];
// numbers[0];

const container = document.getElementById("container");

for (let i = 0; i < 10; i++) {
  const numDiv = document.createElement("div");
  container.appendChild(numDiv);
  numDiv.setAttribute("class", "numDiv");
  numDiv.innerText = i;
  const number = numDiv.textContent;

  numDiv.addEventListener("click", () => {
    if (number % 2 !== 0) {
      numDiv.style.backgroundColor = "red"
    } else {
      numDiv.style.backgroundColor = "green";
    }
  });
}

const movies = ["Inception", "Lord Of The Rings", "Harry Potter", "The Hobbit"];

const listContainer = document.querySelector("#list-container");

for (let i = 0; i < movies.length; i++) {
  const list = document.createElement("li");
  listContainer.appendChild(list);
  list.innerText = movies[i];
}
