
let hexValue = document.getElementById("color-seed").value.split("#")[1]
let colorMode = document.getElementById("color-mode").value

//update value of hexValue and colorMode according to input
document.getElementById("color-seed").addEventListener("change",function(e){
    hexValue = e.target.value.split("#")[1]
})
document.getElementById("color-mode").addEventListener("change",function(e){
    colorMode = e.target.value
})

//get color scheme
document.getElementById('get-color-btn').addEventListener("click",function(){
    getColorScheme(hexValue,colorMode.toLowerCase())
})
async function getColorScheme(colorSeed,colorMode){
    try{
        const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorSeed}&mode=${colorMode}&count=5&format=json`)
        const responseJson = await response.json()
        const colorsArr = responseJson.colors
        let colorHtml = ""
        for(let color of colorsArr){
            console.log(color)
            colorHtml +=`
            <div class="color-item" >
                    <div class="color" style="background-color:${color.hex.value};"></div>
                    <div class="color-name">${color.name.closest_named_hex}</div>
            </div>
            `
        }
        document.getElementById("colors-container").innerHTML = colorHtml
    }catch(e){
        console.error("Error getting data",e)
    }
}