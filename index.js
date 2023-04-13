
const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let convertionOne = document.getElementById("convertationOne")
let convertionTwo = document.getElementById("convertationTwo")
let convertionThree = document.getElementById("convertationThree")
let arr = []


convertBtn.addEventListener("click", function(){
    arr.push(inputEl.value) 
    resultOne = arr * 3.281
    resultTwo = arr / 3.281 
    convertionOne.innerHTML = `<p>${arr} meters = ${resultOne.toFixed(3)} feet |
                               ${arr} feet = ${resultTwo.toFixed(3)} meters`

    resultThree = arr * 0.264
    resultFour = arr / 0.264
    convertionTwo.innerHTML = `<p>${arr} liters = ${resultThree.toFixed(3)} gallons |
                               ${arr} gallons = ${resultFour.toFixed(3)} liters`

    resultFive = arr * 2.204
    resultSix = arr / 2.204
    convertionThree.innerHTML = `<p>${arr} kilos = ${resultFive.toFixed(3)} pounds |
                                ${arr} pounds = ${resultSix.toFixed(3)} kilos`

}) 

