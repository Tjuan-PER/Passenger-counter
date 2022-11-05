/* 
Notes:
DOM -- Using JS to modify websites
    D - Document, you're interacting with an HTML doc
    O - Object, the document keyword is a datatype object in JS
    M - Model, to mean representation

mdn - mozilla developer networks
*/

// Declare vars
document.getElementById("count-el").innerText = 0
let count = 0


// Getting elements from HTML Doc
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//Functions
function increment() {
    count += 1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
}

/* innerText vs. textContent
  textContent returns every element in the node. 
  In contrast, innerText is aware of styling and 
  won't return the text of "hidden" elements.
*/


/* Strings Practice
let message = "You have tree new notifications"
let username = "Juan"
console.log(message + ", " + username +"!")

let name = "Juan"
let greeting = "Hi, my name is"
let myGreeting = greeting + " " + name
console.log(myGreeting)
*/

/* Operations practice
  console.log(count)
  let myAge = 22
  console.log(myAge)
  let humanDogRatio = 7
  let myDogAge = myAge * humanDogRatio
  console.log(myDogAge)
*/