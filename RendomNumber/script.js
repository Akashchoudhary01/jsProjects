// let min = 1
// let max = 100
// document.getElementById('Btn').onclick() = {
//     let rendomNumber = Math.floor(Math.random()* max -min)+ min ;

// console.log(rendomNumber);

const myBtn = document.getElementById('Btn')
const myLable = document.getElementById('mylable')
const min = 1;
const max = 6;
let rendomNumber;

myBtn.onclick = function(){
    rendomNumber =Math.floor( Math.random() *max)+min;
    myLable.textContent = rendomNumber;
}
console.log(rendomNumber);
