//see timer incrementing every second once the page loads
// function timer(){
//     const counter= document.getElementById('counter')
//     console.log(counter)
//     counter.textContent=""
// }
const counter= document.getElementById('counter')
// click listener on buttons
//minus button decrement
const minusButton= document.getElementById('minus')
console.log(minusButton)
let count=0
function updateCounter(){
    counter.textContent=count
    count--
    console.log('I am pressed')
}
function minusButtonClicked(){
    addEventListener('click',updateCounter)
    console.log('pressed')
}
minusButtonClicked()
function forListnerMinus(){
    console.log('I was pressed')

}

// form
