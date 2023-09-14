//see timer incrementing every second once the page loads
// function timer(){
//     const counter= document.getElementById('counter')
//     console.log(counter)
//     counter.textContent=""

// const { applyDocumentFeatures } = require("jsdom/lib/jsdom/browser/documentfeatures")

// }
const counter = document.getElementById('counter');
// click listener on buttons
//minus button decrement
const minusButton = document.getElementById('minus').addEventListener("click",updateCounterMinus);
const addButton = document.getElementById('plus').addEventListener("click",updateCounterPlus);
// console.log(minusButton)
let count=0
function updateCounterMinus(){
    counter.textContent=count
    count--
    // console.log('I am pressed')
}
function updateCounterPlus(){
    counter.textContent = count
    count ++;
    // console.log('I am pressed')
}


// form

const form = document.getElementById('comment-form');

form.addEventListener("submit", (e) => addComment(e));

function addComment(e) {
    e.preventDefault()
    const commentInput = document.getElementById('comment-input');
    commentInput.value;
    console.log(commentInput.value);
    
    const newDiv = document.createElement('div')
    newDiv.textContent = commentInput.value
    const newComment = document.getElementById('list')
    newComment.append(newDiv)
}

