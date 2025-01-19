// temperature Convertor


const textBox = document.getElementById("textbox");
const toFahrenhite = document.getElementById("toFahrenhite");
const toCalsius = document.getElementById("toCalsius");
// const btn = document.getElementById('btn');
const Result = document.getElementById('Result');
let temp;

function convert(){
    if(toFahrenhite.checked){
        temp = Number(textBox.value);
        temp = temp*9/5+32;
        Result.textContent = temp.toFixed(1) + "°F"

    }
    else if(toCalsius.checked){
        if(toCalsius.checked){
            temp = Number(textBox.value);
            temp = (temp-32) *(5/9);
            Result.textContent = temp.toFixed(1) + "°C"
    
        }

    }
    else[
        Result.textContent = "Select a Unit"
    ]

}
