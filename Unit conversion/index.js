/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const measures = [{
    title: "Length (Meter/Feet)",
    metric:"meters",
    imperial:"feet",
    ratio: 3.281
},
{
    title:"Volumne (Liters/Galons)",
    metric:"liters",
    imperial:"gallons",
    ratio: 0.264
},
{
    title:"Mass (Kilograms/Pounds)",
    metric:"kilos",
    imperial:"pounds",
    ratio:2.204
}]

const numberInputEl = document.getElementById("number-input")
const btnEl = document.getElementById("btn")
const resultContainerEl = document.getElementById("results-container")
numberInputEl.addEventListener("change",function(event){
    numberInputEl.value = Number(event.target.value)
    
})
btnEl.addEventListener("click",convert)
function convert(){
    console.log("converting...")
    let value = numberInputEl.value
    let DOMStr = ""
    for(let el of measures){
        DOMStr += `
        <div class="result">
            <h2 class="title">${el.title}</h2>
            <p class="description">${value} ${el.metric} = ${(value*el.ratio).toFixed(3)} ${el.imperial} | ${value} ${el.imperial} = ${(value/el.ratio).toFixed(3)} ${el.metric}</p>
        </div>
        `
    }
    resultContainerEl.innerHTML = DOMStr
    
}